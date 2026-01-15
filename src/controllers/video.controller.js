import Video from "../models/Video.js";

export const getVideos = async (req, res) => {
  const { search, category } = req.query;

  let query = {};

  if (search) {
    query.title = { $regex: search, $options: "i" };
  }

  if (category && category !== "All") {
    query.category = category;
  }

  const videos = await Video.find(query).populate("channelId");
  res.json(videos);
};

export const getSingleVideo = async (req, res) => {
  const video = await Video.findById(req.params.id).populate("channelId");
  res.json(video);
};

export const likeVideo = async (req, res) => {
  const video = await Video.findById(req.params.id);
  video.likes += 1;
  await video.save();
  res.json(video);
};

export const dislikeVideo = async (req, res) => {
  const video = await Video.findById(req.params.id);
  video.dislikes += 1;
  await video.save();
  res.json(video);
};
