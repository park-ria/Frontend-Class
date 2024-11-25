import "./db";
import "./models/video";
import app from "./server";

const PORT = 4000;

const handelListening = () =>
  console.log(`Server Listening on Port http://localhost:${PORT} ⏳`);

app.listen(PORT, handelListening);
//4000번 포트로 서버만듬
