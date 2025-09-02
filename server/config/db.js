import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();


const connectDB = async () =>{
  try {
    await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB connected');
} catch (error) {
  console.error('MongoDB connection error:', error);
  process.exit(1);
}

}
mongoose.connection.on('connected', () => console.log('connected'));
mongoose.connection.on('disconnected', () => console.log('disconnected'));


export default connectDB;
