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

interface usageInfo {
  building: string;
  current_value: number;
  meter_id: string;
  status_code: number;
  status: string;
  time: string;
  unit: string;
}

export class Usage {
  building: string;
  current_value: number;
  meter_id: string;
  status_code: number;
  status: string;
  time: Date;
  unit: string;
  constructor(info: usageInfo) {
    this.building = info.building;
    this.current_value = info.current_value;
    this.meter_id = info.meter_id;
    this.status = info.status;
    this.status_code = info.status_code;
    this.time = new Date(info.time);
    this.unit = info.unit;
  }

  /**
   * Get energy usage information. Limited to 1000 results.
   *
   * @param {string} [options.building] a string of the name of the building to search by
   * @param {DateRange} [options.range] a DateRange to search between
   */
  static async find(options: { building?: string; range?: DateRange }) {
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

    const query = `SELECT * FROM daily_usages${whereString} LIMIT 10000`;
    const usages: usageInfo[] = await db.all(query, params);
    return usages.map(usage => new Usage(usage));
  }
}
