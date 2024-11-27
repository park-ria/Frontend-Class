import mongoose from "mongoose";
// 몽구스는 클라이언트에 기반해서 서버에 있는 몽고디비와 연결 시켜줌

mongoose.connect("mongodb://127.0.0.1:27017/nodejs");

const db = mongoose.connection;
const handleOpen = () => console.log("✅ Connected to MongoDB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
