import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import { authMiddleware } from './middleware/authMiddleware';
import eventRoutes from "./routes/eventRoutes";



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api/v1', authRoutes);

app.use('/api/events', eventRoutes);

app.get('/api/admin/dashboard', authMiddleware as any, (req, res) => {
    res.json({ message: 'Welcome Admin!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
