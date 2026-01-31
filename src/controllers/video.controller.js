import Video from "../models/Video.js";

/* GET all videos (search + filter) */
export const getVideos = async (req, res) => {
  const { search, category } = req.query;
  let query = {};

  if (search) {
    query.title = { $regex: search, $options: "i" };
  }

  if (category && category !== "All") {
    query.category = category;
  }

  const videos = await Video.find(query)
    .populate("channelId", "channelName");

  res.json(videos);
};

/* GET single video */
export const getVideo = async (req, res) => {
  const video = await Video.findById(req.params.id)
    .populate("channelId", "channelName");

  if (!video) {
    return res.status(404).json({ message: "Video not found" });
  }

  res.json(video);
};

/* CREATE video (URL only) */
export const createVideo = async (req, res) => {
  const video = await Video.create({
    ...req.body,
    uploader: req.user.id
  });

  res.status(201).json(video);
};

/* LIKE video */
export const likeVideo = async (req, res) => {
  const video = await Video.findById(req.params.id);
  video.likes += 1;
  await video.save();
  res.json(video);
};

/* DISLIKE video */
export const dislikeVideo = async (req, res) => {
  const video = await Video.findById(req.params.id);
  video.dislikes += 1;
  await video.save();
  res.json(video);
};
