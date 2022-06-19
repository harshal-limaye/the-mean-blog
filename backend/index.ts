import dotenv from "dotenv";
import server from "./src/server";
import { database } from "./helpers/database.helper";

dotenv.config();

const port = process.env.PORT;
const url = <string>process.env.MONGODB;

database.connect(url);

server.instance.listen(port, () => {
  console.log(`[Express]: Server is running at https://localhost:${port}`);
});
