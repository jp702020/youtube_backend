import Channel from "../models/Channel.js";

export const createChannel = async (req, res) => {
  const { channelName, description, channelBanner } = req.body;

  if (!channelName) {
    return res.status(400).json({ message: "Channel name required" });
  }

  const channel = await Channel.create({
    channelName,
    description,
    channelBanner,
    owner: req.user.id
  });

  res.status(201).json(channel);
};

export const getChannel = async (req, res) => {
  const channel = await Channel.findById(req.params.id)
    .populate("owner", "username avatar");

  if (!channel) {
    return res.status(404).json({ message: "Channel not found" });
  }

  res.json(channel);
};
