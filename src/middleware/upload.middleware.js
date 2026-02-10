import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const isVideo = file.mimetype.startsWith("video");
  
    const upload = multer({
  storage,
  limits: {
    fileSize: 100 * 1024 * 1024,
  },
});


    return {
      folder: isVideo
        ? "youtube_clone/videos"
        : "youtube_clone/thumbnails",
      resource_type: isVideo ? "video" : "image",
      allowed_formats: isVideo
        ? ["mp4", "mov", "avi"]
        : ["jpg", "jpeg", "png"],
    };
  },
});

const upload = multer({ storage });

export default upload;
