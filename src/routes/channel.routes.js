import express from "express";
import auth from "../middleware/authMiddleware.js";
import { createChannel, getMyChannel } from "../controllers/channel.controller.js";

const router = express.Router();

router.post("/", auth, createChannel);
router.get("/me", auth, getMyChannel);

export default router;
