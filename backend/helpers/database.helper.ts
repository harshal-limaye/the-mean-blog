import mongoose from "mongoose";

class Database {
  connect(url: string): void {
    mongoose
      .connect(url)
      .then(() => console.log("[MongoDB]: Connection successful"))
      .catch(() => console.log("[MongoDB]: Connection failed"));
  }
}

export const database = new Database();
