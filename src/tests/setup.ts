import "dotenv/config";
import { beforeAll, afterAll } from "vitest";

beforeAll(() => {
	console.log("Test environment starting");
});

afterAll(() => {
	console.log("Test environment finished");
});
