import express from "express";
import upload from "../middleware/upload.middleware.js";
import { uploadVideo } from "../controllers/video.controller.js";

const router = express.Router();

router.post(
  "/upload",
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  uploadVideo
);

export default router;
