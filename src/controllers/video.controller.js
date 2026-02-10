import Video from "../models/Video.js";

export const uploadVideo = async (req, res) => {
  try {
    console.log("===== UPLOAD VIDEO HIT =====");
    console.log("REQ BODY:", req.body);
    console.log("REQ FILES:", req.files);

    const { title, description, channelId } = req.body;

    if (!title || !channelId) {
      return res.status(400).json({
        message: "Title or channelId missing",
      });
    }

    if (!req.files) {
      return res.status(400).json({
        message: "No files received",
      });
    }

    if (!req.files.video || !req.files.thumbnail) {
      return res.status(400).json({
        message: "Video or thumbnail file missing",
      });
    }

    const videoUrl = req.files.video[0].path;
    const thumbnailUrl = req.files.thumbnail[0].path;

    const video = await Video.create({
      title,
      description,
      videoUrl,
      thumbnailUrl,
      channel: channelId,
    });

    res.status(201).json(video);
  } catch (error) {
    console.error("🔥 UPLOAD ERROR:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};
