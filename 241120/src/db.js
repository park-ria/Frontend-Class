import mongoose from "mongoose";
// 몽구스는 클라이언트에 기반해서 서버에 있는 몽고디비와 연결 시켜줌

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
const handleOpen = () => console.log("✅ Connected to MongoDB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
