import express from "express";
// 미들웨어 전용 라이브러리
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");
//use는 get함수보다 먼저 실행 되어야함
//app.use(morganMiddleWare);
// get 함수는 url값을 찾아서 실행시키면 종결됨 미들웨어가 들어갈 자리가 없으므로, 반드시 종결되기 전인 get 전에 써야함

// use는 미들웨어에 씀
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

// session 정의
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true, // true일 경우 세션 안에 데이터가 변경되지 않아도 클라이언트의 매 요청마다 세션을 저장하는 옵션
    // true는 무조건 세션을 다시 만들어라 -> 세션값이 변하지 않아도 세션을 저장해라
    // false는 실제 세션 값을 변경한 사람만 저장하는 보통 resave:false임
    saveUninitialized: true, // 초기화 되지 않은 세션(변경된 데이터가 없는 최초의 세션)의 상태에서도 세션을 값을 저장하는 옵션
    // 처음으로 이 페이지에 접속했을 때 회원가입, 로그인 하지 않아도 세션부터 만들어라
    // cookie: {
    //   // 쿠키 제한 시간 밀리초
    //   maxAge: 20000, // 20초가 경과한 이후에는 쿠키값을 리셋하겠다
    // },
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.use(localMiddleware);
// uploads 폴더는 src 바깥에 있으므로 express.static을 써서 가져올 수 있음
app.use("/uploads", express.static("uploads"));
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
