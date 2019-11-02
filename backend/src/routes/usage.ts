import { Router } from "express";
import { Usage, DateRange } from "../db/usage";

export const router = Router();

router.get("/", async (req, res, next) => {
  const json: any = {};
  let range: DateRange | undefined = undefined;

  try {
    if (req.query.range) {
      let [start, end] = req.query.range.split("|");
      range = new DateRange(new Date(start), new Date(end));
    }

    const usages = await Usage.find({ building: req.query.building, range });
    json.usages = usages;
  } catch (err) {
    console.error(err);
    json.error = err;
  }

  res.json(json);
});
