import { Database } from "./database";

if (!process.env.DB_PATH) {
  throw "DB_PATH not set in .env";
}

export const db = new Database(process.env.DB_PATH);
