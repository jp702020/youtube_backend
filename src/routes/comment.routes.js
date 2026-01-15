import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  getComments,
  addComment,
  updateComment,
  deleteComment
} from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/:videoId", getComments);
router.post("/:videoId", auth, addComment);
router.put("/edit/:id", auth, updateComment);
router.delete("/:id", auth, deleteComment);

export default router;
