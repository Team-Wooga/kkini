import { Request, Response } from "express";

const roomsController = {
  // POST
  creation: async (req: Request, res: Response) => {
    res.send("creation");
  },

  // PATCH
  title: async (req: Request, res: Response) => {
    res.send("title");
  },
  categories: async (req: Request, res: Response) => {
    res.send("categories");
  },

  // GET
  mostuser: async (req: Request, res: Response) => {
    res.send("mostuser");
  },
  count: async (req: Request, res: Response) => {
    res.send("count");
  },

  // DELETE
  deletion: async (req: Request, res: Response) => {
    res.send("deletion");
  },
};

export default roomsController;
