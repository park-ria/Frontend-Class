import express from "express";
import { join, login } from "../controllers/userContoller";
import { home, search } from "../controllers/videoController";

// 메인,로그인,서치 페이지는 글로벌 라우터에서 관리
const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
