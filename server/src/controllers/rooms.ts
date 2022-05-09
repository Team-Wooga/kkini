import { Request, Response } from "express";

const roomsController = {
  // POST
  creation: (req: Request, res: Response) => {
    res.send("connected");
  },

  // PATCH
  title: () => {},
  categories: () => {},

  // GET
  mostuser: () => {},
  count: () => {},

  // DELETE
  deletion: () => {},
};

export default roomsController;
