import { Router } from "express";
import roomsController from "../controllers/rooms"

const roomsRouter = Router();

// 채팅방 생성
roomsRouter.post("/creation", roomsController.creation);



export default Router;