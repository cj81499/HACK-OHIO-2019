import { db } from "./db";

export const updateBuildings = (
  building: string,
  latitude: number,
  longitude: number,
  campusID: number
) => {
  const query =
    "INSERT OR IGNORE INTO buildings(label, latitude, longitude, campusID) VALUES (?, ?, ?, ?)";
  const params = [building, latitude, longitude, campusID];
  db.serialize(() => {
    db.run(query, params);
  });
};
