import { Router } from "express";
import roomsController from "../controllers/rooms";

const roomsRouter = Router();

// 채팅방 생성
roomsRouter.post("/creation", roomsController.creation);

// 채팅방 방제 및 카테고리 수정
roomsRouter.patch("/title/:room_id", roomsController.title);
roomsRouter.patch("/categories/:room_id", roomsController.categories);

// 채팅방 통계 및 랜딩 관련 조회 기능
roomsRouter.get("/mostuser", roomsController.mostuser);
roomsRouter.get("/count", roomsController.count);

// 채팅방 삭제
roomsRouter.delete("/deletion/:room_id", roomsController.deletion);

export default roomsRouter;
