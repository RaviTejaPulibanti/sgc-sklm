import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import Admin from './models/Admin'; 


dotenv.config();

const admins = [
  { email: 'admin1@example.com', password: 'password123' },
  { email: 'admin2@example.com', password: 'password456' },
  { email: 'admin3@example.com', password: 'password789' },
];

const createAdmins = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('✅ Connected to MongoDB');

    for (const adminData of admins) {
      const existingAdmin = await Admin.findOne({ email: adminData.email });

      if (existingAdmin) {
        console.log(`⚠️ Admin already exists: ${adminData.email} — Password NOT updated`);
      } else {
        const hashedPassword = await bcrypt.hash(adminData.password, 10);
        await Admin.create({ email: adminData.email, password: hashedPassword });
        console.log(`✅ Created admin: ${adminData.email}`);
      }
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

createAdmins();
