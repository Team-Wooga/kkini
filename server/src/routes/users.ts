import { Router } from "express";
import usersController from "../controllers/users";

const usersRouter = Router();

// 채팅방 생성
usersRouter.post("/entrance/:room_id", usersController.entrance);

// 방장 권한 양도 //? 방장이 권한 양도없이 나가는 경우는 어떻게 할지.
usersRouter.patch(
	"/changeadmin/:admin_id/:targetuser_id",
	usersController.changeAdmin
);

// 채팅방 내 유저 수 조회
usersRouter.get("/count/:room_id", usersController.count);

// 채팅방 (강제)퇴장
usersRouter.delete("/deletion/:room_id/:user_id", usersController.deletion);

export default usersRouter;
