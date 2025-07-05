import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
    params: {
      //@ts-ignore
    folder: "events", // folder in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

export { cloudinary, storage };
