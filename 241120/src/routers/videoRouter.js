import express from "express";
import { upload, see, edit, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

// (\\d+)는 숫자만 받겠다
videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
