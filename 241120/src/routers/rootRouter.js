import express from "express";
import { getJoin, postJoin, login } from "../controllers/userContoller";
import { home, search } from "../controllers/videoController";

// 메인,로그인,서치 페이지는 글로벌 라우터에서 관리
const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", search);

export default rootRouter;