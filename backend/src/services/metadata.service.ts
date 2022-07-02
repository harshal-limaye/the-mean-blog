import fs from "fs";
import path from "path";

export class MetadataService {
  static async get(id: string) {
    return fs.readFileSync(
      path.resolve(process.cwd() + `/src/metadata/${id}.json`)
    );
  }
}
