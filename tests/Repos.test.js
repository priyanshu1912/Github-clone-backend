import request from "supertest";
import app from "../index";

describe("if username is passed", () => {
  test("server should respond with status 200", async () => {
    await request(app)
      .get("/repos")
      .query({ username: "priyanshu1912" })
      .expect(200);
  });
});

describe("if username is not passed", () => {
  test("server should respond with status 404", async () => {
    await request(app).get("/repos").expect(404);
  });
});
