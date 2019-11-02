import { db } from "./myDatabase";

export class DateRange {
  start: Date;
  end: Date;
  constructor(start: Date, end: Date) {
    this.start = start;
    this.end = end;
    if (this.duration() <= 0) {
      throw "Ranges must have positive duration";
    }
  }

  /**
   * @returns the duration of the range in ms
   */
  duration() {
    return this.end.getTime() - this.start.getTime();
  }
}

export class Usage {
  static async find(options: { building?: string; range?: DateRange }) {
    console.log(options);
    const whereOptions: string[] = [];
    const params: string[] = [];

    if (options.building) {
      whereOptions.push("LOWER( building ) LIKE LOWER( (?) )");
      params.push(`%${options.building}%`);
    }

    if (options.range) {
      whereOptions.push("(?) <= time AND time <= (?)");
      params.push(options.range.start.toISOString());
      params.push(options.range.end.toISOString());
    }

    const whereString = whereOptions.length
      ? ` WHERE ${whereOptions.join(" AND ")}`
      : "";

    const query = `SELECT * FROM daily_usages${whereString}`;

    console.log(params);
    return await db.all(query, params);
  }
}
