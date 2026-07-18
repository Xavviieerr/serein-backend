import { Router } from "express";
import prisma from "../database/prisma.js";

const router = Router();

router.get("/health", (_req, res) => {
	return res.status(200).json({
		status: "ok",
	});
});

router.get("/health/db", async (_req, res) => {
	await prisma.$queryRaw`SELECT 1`;

	return res.status(200).json({
		database: "connected",
	});
});

export default router;
