import { Router } from "express";
import { Usage, DateRange } from "../db/usage";

export const router = Router();

router.get("/", async (req, res, next) => {
  res.json(await getUsageJson(req.query));
});

const getUsageJson = async (query: any) => {
  const json: any = {};
  const { building, range } = query;
  // range is a string of two ISO 8601 dates/times separated by a "|" character.
  // For example: "2019-11-02T20:41:50Z|2019-11-02T20:41:50Z"
  // TODO: make sure there are query params so the entire DB is not requested

  const rangeOrError = stringToDateRange(range);

  if (rangeOrError instanceof Error) {
    json.error = rangeOrError;
  } else {
    json.usages = await Usage.find({
      building,
      range
    });
  }
  return json;
};

/**
 * converts a string of two ISO 8601 dates/times separated by a "|" character to a DateRange
 *
 * @param rangeStr the string to convert
 *        For example: "2019-11-02T20:41:50Z|2019-11-02T20:41:50Z"
 */
const stringToDateRange = (rangeStr: string | undefined) => {
  if (!rangeStr) {
    return undefined;
  }

  const rangeStrs = rangeStr.split("|");

  if (rangeStrs.length != 2) {
    return new Error("Invalid Date");
  }

  const dates = rangeStrs.map(dateStr => new Date(dateStr));

  if (dates.some(d => isNaN(d.getTime()))) {
    return new Error("Invalid Date");
  }

  const [start, end] = dates;
  return new DateRange(start, end);
};
