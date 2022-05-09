import { Request, Response } from "express";

const usersController = {
	// POST
	entrance: (req: Request, res: Response) => {
		res.send("entrance");
	},

	// PATCH
	changeadmin: (req: Request, res: Response) => {
		res.send("changeadmin");
	},

	// GET

	count: (req: Request, res: Response) => {
		res.send("count");
	},

	// DELETE
	deletion: (req: Request, res: Response) => {
		res.send("deletion");
	},
};

export default usersController;
