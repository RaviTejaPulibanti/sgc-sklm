import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import { authMiddleware } from './middleware/authMiddleware';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/v1', authRoutes);

app.get('/api/admin/dashboard', authMiddleware as any , (req, res) => {
    res.json({ message: 'Welcome Admin!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
