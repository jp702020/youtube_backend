import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import channelRoutes from "./routes/channel.routes.js";
import videoRoutes from "./routes/video.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/channels", channelRoutes);
app.use("/api/videos", videoRoutes);

export default app;
