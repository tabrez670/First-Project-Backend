import express, { Request, Response, NextFunction } from "express";

import {
    getVideo,
    getAllVideos,
    uploadVideo,
    deleteVideo,
} from "../controller/video.controller.js";
import decodeAuthToken from "../middleware/decodeAuthToken.js";

const videoRoutes = express.Router();

// Public routes
// none

// Private routes
videoRoutes.get("/all-videos", decodeAuthToken, getAllVideos);
videoRoutes.get("/video/:id", decodeAuthToken, getVideo);
videoRoutes.post("/upload-video", decodeAuthToken, uploadVideo);
videoRoutes.delete("/video/:id", decodeAuthToken, deleteVideo);

export default videoRoutes;