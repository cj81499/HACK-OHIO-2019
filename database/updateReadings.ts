import { db } from "./db";

export const updateReadings = (
  meterID: string,
  measurement: number,
  created: number
) => {
  const query =
    "INSERT OR IGNORE INTO readings(meterID, measurement, created) VALUES (?, ?, ?)";
  const params = [meterID, measurement, created];
  db.serialize(() => {
    db.run(query, params);
  });
};
