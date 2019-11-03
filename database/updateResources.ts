import { db } from "./db";

export const updateResources = (resource: string) => {
  const query = "INSERT OR IGNORE INTO resources(label) VALUES (?)";
  const params = [resource];
  db.serialize(() => {
    db.run(query, params);
  });
};
