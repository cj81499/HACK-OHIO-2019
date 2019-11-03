import { db } from "./db";

export const updateCampuses = (campus: string) => {
  const query = "INSERT OR IGNORE INTO campuses(label) VALUES (?)";
  const params = [campus];
  db.serialize(() => {
    db.run(query, params);
  });
};
