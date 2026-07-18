import request from "supertest";
import { describe, expect, it } from "vitest";
import app from "../app.js";

describe("Database Health Check API", () => {
	it("should confirm database connection", async () => {
		const response = await request(app).get("/api/health/db").expect(200);

		expect(response.body).toEqual({
			database: "connected",
		});
	});
});
