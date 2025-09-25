import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }
    
    console.log("Connecting to MongoDB Atlas...");
    
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`MongoDB Atlas Connected: ${conn.connection.host}`);
    
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB Atlas connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB Atlas disconnected');
    });
    
  } catch (error) {
    console.error(`MongoDB Atlas connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;