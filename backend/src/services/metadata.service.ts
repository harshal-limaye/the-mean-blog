import fs from "fs";
import path from "path";

export class MetadataService {
  static async get(id: string) {
    return JSON.parse(
      fs.readFileSync(
        path.resolve(process.cwd() + `/src/metadata/${id}.json`),
        "utf8"
      )
    );
  }
}
