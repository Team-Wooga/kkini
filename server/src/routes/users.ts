import { Router } from "express";
import usersController from "../controllers/users";

const usersRouter = Router();

// 채팅방 생성
usersRouter.post("/entrance/:room_id", usersController.entrance);
//방장이 권한양도 없이 나가는 경우는 어떻게 할지.
usersRouter.patch(
	"/changeadmin/:admin_id/:targetuser_id",
	usersController.changeadmin
);
usersRouter.get("/count/:room_id", usersController.count);
usersRouter.delete("/deletion/:room_id/:user_id", usersController.deletion);

export default usersRouter;
