import Comment from "../models/Comment.js";

export const getComments = async (req, res) => {
  const comments = await Comment.find({ videoId: req.params.videoId })
    .populate("userId", "username");
  res.json(comments);
};

export const addComment = async (req, res) => {
  const comment = await Comment.create({
    videoId: req.params.videoId,
    userId: req.user.id,
    text: req.body.text
  });
  res.status(201).json(comment);
};

export const updateComment = async (req, res) => {
  const updated = await Comment.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { new: true }
  );
  res.json(updated);
};

export const deleteComment = async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.json({ message: "Comment deleted" });
};
