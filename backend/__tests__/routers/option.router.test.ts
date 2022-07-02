import { Database } from "../../src/helpers/mock.helper";
import server from "../../src/server";
import supertest from "supertest";
import { OptionService } from "../../src/services/option.service";
import { Option } from "../../src/models/option";

describe("option.router.ts", () => {
  const request = supertest(server.instance);
  const db = new Database();

  beforeAll(() => {
    db.connect();
  });

  afterAll(() => {
    db.disconnect();
  });

  beforeEach(async () => {
    await Option.findOneAndDelete({
      key: "hello",
    });
  });

  it("/api/v1/options - GET - success", async () => {
    const option = await OptionService.set("hello", "world");
    const response = await request.get("/api/v1/options/hello");
    expect(response.body.value.value).toEqual("world");
  });

  it("/api/v1/options - GET - failure", async () => {
    const response = await request.get("/api/v1/options/ketDoesnotExists");
    expect(response.body.success).toBe(false);
  });

  it("/api/v1/options - POST - success:create", async () => {
    const response = await request.post("/api/v1/options/hello").send({
      value: "mean",
    });
    const option = await OptionService.get("hello");
    expect(option.value).toEqual("mean");
  });

  it("/api/v1/options - POST - success:update", async () => {
    await OptionService.set("hello", "world");
    await request.post("/api/v1/options/hello").send({ value: "mean" });
    const option = await OptionService.get("hello");
    expect(option.value).toEqual("mean");
  });

  it("/api/v1/options - POST - failure", async () => {
    const response = await request.post("/api/v1/options/stack").send({});
    expect(response.body.success).toBe(false);
  });
});
