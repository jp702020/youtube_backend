import express from "express";
import { createChannel, getChannel } from "../controllers/channel.controller.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", auth, createChannel);
router.get("/:id", getChannel);

export default router;
