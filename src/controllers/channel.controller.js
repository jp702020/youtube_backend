import Channel from "../models/Channel.js";
import User from "../models/User.js";

export const createChannel = async (req, res) => {
  const { channelName, description, channelBanner } = req.body;

  const channel = await Channel.create({
    channelName,
    description,
    channelBanner,
    owner: req.user.id
  });

  await User.findByIdAndUpdate(req.user.id, {
    $push: { channels: channel._id }
  });

  res.status(201).json(channel);
};

export const getChannel = async (req, res) => {
  const channel = await Channel.findById(req.params.id)
    .populate("owner", "username")
    .populate("videos");

  if (!channel) {
    return res.status(404).json({ message: "Channel not found" });
  }

  res.json(channel);
};
