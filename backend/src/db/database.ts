import sqlite3 = require("sqlite3");

export class Database {
  db: sqlite3.Database;

  constructor(dbFilePath: string) {
    this.db = new sqlite3.Database(dbFilePath, err => {
      if (err) {
        throw `Could not connect to database at ${dbFilePath}`;
      }
    });
  }

  run(sql: string, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  get(sql: string, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  all(sql: string, params: any[] = []): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}
