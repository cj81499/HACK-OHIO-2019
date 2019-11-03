import { createReadStream, readdirSync, writeFileSync } from "fs";
import { createInterface } from "readline";
import { updateUnits } from "./updateUnits";

const processConfigFile = () =>
  new Promise((resolve, reject) => {
    let firstLine = true;

    const readInterface = createInterface({
      input: createReadStream("./hackOHI.O/HackathonConfig.csv")
    });

    readInterface.on("line", (line: string) => {
      if (firstLine) {
        console.log(`  first line: ${line}`);
        firstLine = false;
      }
      const elements = line.trim().split('","');

      const [
        buildingId,
        meterId,
        _description,
        units,
        resource,
        buildingName,
        _grossSquareFeet,
        _buildDate,
        latitudeStr,
        longitudeStr,
        campus,
        _organization,
        _locationType,
        _steamSourceId,
        _chilledWaterSourceId,
        _hotWaterSourceId,
        _activationDate
      ] = elements;

      const [latitude, longitude] = [latitudeStr, longitudeStr].map(e =>
        parseFloat(e)
      );

      // throw "";

      updateUnits(units);
      // UPDATE TABLES
    });

    readInterface.on("close", () => {
      resolve();
      //   console.log(`Close: ${filenames[index]}`);
    });
  });

const processDataFile = (
  output_dir: string,
  filenames: string[],
  index: number
): Promise<number> =>
  new Promise((resolve, reject) => {
    let firstLine = true;

    const readInterface = createInterface({
      input: createReadStream(`${output_dir}${filenames[index]}`)
    });

    readInterface.on("line", (line: string) => {
      if (firstLine) {
        console.log(`  first line: ${line}`);
        firstLine = false;
      }
      const elements = line.split('","');

      const [
        meterId,
        currentValueStr,
        _valueString,
        timeStr,
        _status,
        _statusCode
      ] = elements;
      const currentValue = parseFloat(currentValueStr);
      const time = new Date(timeStr);
      // throw "";

      // updateUnits(line);
      // UPDATE TABLES
    });

    readInterface.on("close", () => {
      resolve(index + 1);
      console.log(`Close: ${filenames[index]}`);
    });
  });

const main = async () => {
  // setup DB
  const DB_FILE = "./database.db";
  writeFileSync(DB_FILE, "");

  var fs = require("fs"),
    spawn = require("child_process").spawn,
    child = spawn("sqlite3", [DB_FILE]);

  fs.createReadStream("./db_create.sql").pipe(child.stdin);

  child.on("exit", async () => {
    const DATA_DIR = "./hackOHI.O/DataHourly/";
    const hourly_data_filenames = readdirSync(DATA_DIR);

    await processConfigFile();

    let prom = processDataFile(DATA_DIR, hourly_data_filenames, 0);
    while (await prom) {
      prom = prom.then(next_index => {
        if (next_index < hourly_data_filenames.length) {
          console.log(`Opening ${hourly_data_filenames[next_index]}`);
          return processDataFile(DATA_DIR, hourly_data_filenames, next_index);
        }
        return 0;
      });
    }

    console.log("done");
  });
};

main().catch(reason => {
  console.error(reason);
});
