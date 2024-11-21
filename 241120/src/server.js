import express from "express";
import morgan from "morgan";
// 미들웨어 전용 라이브러리
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

console.log(process.cwd());

const app = express();
const logger = morgan("dev");
//use는 get함수보다 먼저 실행 되어야함
//app.use(morganMiddleWare);
// get 함수는 url값을 찾아서 실행시키면 종결됨 미들웨어가 들어갈 자리가 없으므로, 반드시 종결되기 전인 get 전에 써야함

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handelListening = () =>
  console.log(`Server Listening on Port http://localhost:${PORT} ⏳`);

app.listen(PORT, handelListening);
//4000번 포트로 서버만듬
