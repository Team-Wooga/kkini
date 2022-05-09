import { Router } from "express";
import roomsController from "../controllers/rooms"

const roomsRouter = Router();

// 채팅방 생성
roomsRouter.post("/creation", roomsController.creation);
roomsRouter.patch("/title", roomsController.title);
roomsRouter.patch("/categories", roomsController.categories);
roomsRouter.delete("/deletion/:user_id", roomsController.deletion);
roomsRouter.get("/mostuser", roomsController.mostuser);
roomsRouter.get("/count", roomsController.count);



export default roomsRouter;