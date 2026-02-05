import Video from "../models/Video.js";

export const uploadVideo = async (req, res) => {
  try {
    const { title, description, channelId } = req.body;

    const videoUrl = req.files.video[0].path;
    const thumbnailUrl = req.files.thumbnail[0].path;

    const video = await Video.create({
      title,
      description,
      channel: channelId,
      videoUrl,
      thumbnailUrl,
    });

    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
