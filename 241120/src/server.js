import express from "express";
import morgan from "morgan";
// 미들웨어 전용 라이브러리

const PORT = 4000;

const app = express();
const morganMiddleWare = morgan("dev");

// const middleWare = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// };

// const privateMiddleWare = (req, res, next) => {
//   const url = req.url;
//   if (url === "/protected") {
//     return res.send("<h1>Not Allowed</h1>");
//   }
//   console.log("Allowed, You may continue");
//   next();
// };

//Global Router
const globalRouter = express.Router();
const handleMain = (req, res) => {
  return res.send("Home");
};
globalRouter.get("/", handleMain);

const userRouter = express.Router();
const handleEditUser = (req, res) => {
  return res.send("Edit User");
};
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handelWatchVideo = (req, res) => {
  return res.send("Watch Video");
};
videoRouter.get("/watch", handelWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/video", videoRouter);

const handleHome = (req, res) => {
  return res.end();
};

// const handleProtected = (req, res) => {
//   return res.send("Welcome to the Private Lounge");
// };

//app.get("/",middleWare, handleHome);
//app.use(middleWare); //use는 get함수보다 먼저 실행 되어야함
app.use(morganMiddleWare);
//app.use(privateMiddleWare);
app.get("/", handleHome);
// get 함수는 url값을 찾아서 실행시키면 종결됨 미들웨어가 들어갈 자리가 없으므로, 반드시 종결되기 전인 get 전에 써야함
// app.get("/protected", handleProtected);

const handelListening = () =>
  console.log(`Server Listening on Port http://localhost:${PORT} ⏳`);

app.listen(PORT, handelListening);
//4000번 포트로 서버만듬
