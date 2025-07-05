import mongoose, { Document, Schema } from "mongoose";

interface Club {
    name: string;
    icon: string;
}

export interface IEvent extends Document {
  title: string;
  description: string;
  date: string;
  time: string;
  views: number;
  imageUrl: string;
  club: Club;
}

const ClubSchema = new Schema<Club>({
    name: {
        type: String,
        required: true
    },
    icon: {
      type: String,
      required: true
    },
});

const EventSchema = new Schema<IEvent>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    imageUrl: {
        type: String
    },
    club: {
        type: ClubSchema,
        required: true
    },
});

export default mongoose.model<IEvent>("Event", EventSchema);
