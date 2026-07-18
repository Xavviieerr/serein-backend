import request from "supertest";
import { describe, expect, it } from "vitest";
import app from "../app.js";

describe("Health Check API", () => {
	it("should return API health status", async () => {
		const response = await request(app).get("/api/health").expect(200);

		expect(response.body).toEqual({
			status: "ok",
		});
	});
});
