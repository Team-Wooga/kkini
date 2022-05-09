import { Request, Response } from "express";

const usersRouter = {
  // POST
  entrance: async (req: Request, res: Response) => {
    res.send("entrance");
  },

  // PATCH
  changeAdmin: async (req: Request, res: Response) => {
    res.send("changeAdmin");
  },

  // GET
  count: async (req: Request, res: Response) => {
    res.send("count");
  },

  // DELETE
  deletion: async (req: Request, res: Response) => {
    res.send("deletion");
  },
};

export default usersRouter;
