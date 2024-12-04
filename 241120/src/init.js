import "dotenv/config";
import "./db";
import "./models/video";
import "./models/user";
import app from "./server";
// import의 역할은 찾아온 후 실행

const PORT = 4000;

const handelListening = () =>
  console.log(`Server Listening on Port http://localhost:${PORT} ⏳`);

app.listen(PORT, handelListening);
//4000번 포트로 서버만듬
