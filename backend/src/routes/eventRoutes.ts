import express from "express";
import multer from "multer";
import { storage } from "../config/cloudinary";
import {
  getAllEvents,
  createEvent,
  getSingleEvent,
} from "../controllers/eventController";

const upload = multer({ storage });
const router = express.Router();

router.get("/", getAllEvents);
router.get("/:id", getSingleEvent);
router.post("/", upload.single("image"), createEvent);

export default router;
