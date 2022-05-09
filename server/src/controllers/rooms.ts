import { Request, Response } from "express";

const roomsController = {
	// POST
	creation: (req: Request, res: Response) => {
		res.send("connected");
	},

	// PATCH
	title: (req: Request, res: Response) => {
		res.send("title");
	},
	categories: (req: Request, res: Response) => {
		res.send("categories");
	},

	// GET
	mostuser: (req: Request, res: Response) => {
		res.send("mostuser");
	},
	count: (req: Request, res: Response) => {
		res.send("count");
	},

	// DELETE
	deletion: (req: Request, res: Response) => {
		res.send("deletion");
	},
};

export default roomsController;
