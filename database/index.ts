import { createReadStream, readdirSync } from "fs";
import { createInterface } from "readline";

const processFile = (
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
      // UPDATE TABLES
    });

    readInterface.on("close", () => {
      resolve(index + 1);
      console.log(`Close: ${filenames[index]}`);
    });
  });

const main = async () => {
  const DATA_DIR = "./hackOHI.O/DataHourly/";
  const hourly_data_filenames = readdirSync(DATA_DIR);

  let prom = processFile(DATA_DIR, hourly_data_filenames, 0);
  while (await prom) {
    prom = prom.then(next_index => {
      if (next_index < hourly_data_filenames.length) {
        console.log(`Opening ${hourly_data_filenames[next_index]}`);
        return processFile(DATA_DIR, hourly_data_filenames, next_index);
      }
      return 0;
    });
  }

  console.log("done");
};

main();
