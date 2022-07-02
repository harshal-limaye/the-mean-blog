import { Database } from "../src/helpers/mock.helper";
import server from "../src/server";
import supertest from "supertest";

describe("server.ts", () => {
  const request = supertest(server.instance)
  const db = new Database();
  beforeAll(() => {
    db.connect();
  });

  afterAll(() => {
    db.disconnect();
  });

  it("/api/v1/", async () => {
    const response = await request.get("/api/v1/");
    expect(response.body.value.message).toEqual("Hello World");
  });
});
