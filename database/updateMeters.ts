import { db } from "./db";

export const updateMeters = (
  meter: string,
  buildingID: number,
  unitID: number,
  resourceID: number
) => {
  const query =
    "INSERT OR IGNORE INTO meters(label, buildingID, unitID, resourceID) VALUES (?, ?, ?, ?)";
  const params = [meter, buildingID, unitID, resourceID];
  db.serialize(() => {
    db.run(query, params);
  });
};
