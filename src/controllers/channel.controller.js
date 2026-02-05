import Channel from "../models/Channel.js";

export const createChannel = async (req, res) => {
  const { channelName, description } = req.body;

  const channel = await Channel.create({
    channelName,
    description,
    owner: req.user.id
  });

  res.status(201).json(channel);
};

export const getMyChannel = async (req, res) => {
  const channel = await Channel.findOne({ owner: req.user.id });
  res.json(channel || null);
};
