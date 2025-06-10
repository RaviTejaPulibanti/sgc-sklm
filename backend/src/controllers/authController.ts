import { Request, Response } from 'express';
import Admin from '../models/Admin';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const adminLogin = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    console.log('Admin login attempt:', { email });

  try {
    // Check if the admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
        res.status(401)
            .json({ message: 'Invalid email or password' });
      return;
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
        res.status(401)
            .json({ message: 'Invalid email or password' });
      return;
    }

    // Generate JWT token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET as string, { expiresIn: '20s' });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during admin login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};