import { Request, Response } from "express";
import Event from "../models/Event";

// GET /api/events
export const getAllEvents = async (req: Request, res: Response): Promise<void> => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.status(200).json(events);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

// GET /api/events/:id
export const getSingleEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      res.status(404).json({ error: "Event not found" });
      return;
    }

    event.views += 1;
    await event.save();

    res.status(200).json(event);
  } catch {
    res.status(500).json({ error: "Error fetching event" });
  }
};

// POST /api/events
export const createEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, date, time, club } = req.body;
    const imageUrl = (req.file as any)?.path;

    const newEvent = new Event({
      title,
      description,
      date,
      time,
      views: 0,
      imageUrl,
      club: JSON.parse(club), // frontend sends club as stringified JSON
    });

    const saved = await newEvent.save();
    res.status(201).json(saved);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
