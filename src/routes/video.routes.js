import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  getVideos,
  getVideo,
  createVideo,
  likeVideo,
  dislikeVideo
} from "../controllers/video.controller.js";

const router = express.Router();

router.get("/", getVideos);
router.get("/:id", getVideo);
router.post("/", auth, createVideo);
router.post("/:id/like", auth, likeVideo);
router.post("/:id/dislike", auth, dislikeVideo);

export default router;
