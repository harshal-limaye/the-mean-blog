import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

export class Database {
  url: string;
  db: MongoMemoryServer;

  async connect(): Promise<any> {
    try {
      this.db = await MongoMemoryServer.create();
      this.url = this.db.getUri();

      await mongoose.connect(this.url);
    } catch (error: any) {
      throw Error(error);
    }
  }

  async disconnect(): Promise<any> {
    try {
      await mongoose.connection.close();
      if (this.db) {
        await this.db.stop();
      }
    } catch (error: any) {}
  }
}
