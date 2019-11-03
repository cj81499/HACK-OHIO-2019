import { db } from "./db";

export const updateUnits = (unit: string) => {
  const query = `INSERT OR IGNORE INTO units(unit) VALUES(?)`;
  const params = [unit];
  db.serialize(() => {
    db.run(query, params);
  });
};
