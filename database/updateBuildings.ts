import { db } from "./db";

export const updateBuildings = (
  id: number,
  building: string,
  latitude: number,
  longitude: number,
  campus: string
) => {
  const query = `INSERT OR IGNORE INTO buildings(id, label, latitude, longitude, campusID)
      VALUES ((?), (?), (?), (?), (SELECT id FROM campuses WHERE label=(?)))`;
  const params = [id, building, latitude, longitude, campus];
  db.serialize(() => {
    db.run(query, params);
  });
};
