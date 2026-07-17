import express from "express";
import type { Request, Response } from "express";

const app = express();

const PORT = 5000;

app.get("/", (req: Request, res: Response) => {
	res.json({
		message: "Serein backend running",
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
