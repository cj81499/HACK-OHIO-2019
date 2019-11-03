import { db } from "./db";

export const updateMeters = (
  meter: string,
  buildingId: number,
  unit: string,
  resource: string
) => {
  const query =
    "INSERT OR IGNORE INTO meters(label, buildingID, unitID, resourceID) VALUES ((?), (SELECT id FROM buildings WHERE id=(?)), (SELECT id FROM units WHERE unit=(?)), (SELECT id FROM resources WHERE label=(?)))";
  const params = [meter, buildingId, unit, resource];
  db.serialize(() => {
    db.run(query, params);
  });
};
