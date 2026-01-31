import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  createChannel,
  getChannel
} from "../controllers/channel.controller.js";

const router = express.Router();

router.post("/", auth, createChannel);
router.get("/:id", getChannel);

export default router;
