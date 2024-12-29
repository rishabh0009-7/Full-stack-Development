import dotenv from "dotenv"; // Ensure the .env file is loaded


dotenv.config(); // Load environment variables
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
  try {
    // Connect to MongoDB
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`,
      {
        useNewUrlParser: true, // Recommended options
        useUnifiedTopology: true,
      }
    );

    // Successful connection log
    console.log(
      `\nMongoDB connected! Database host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    // Error handling
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit the process with failure code
  }
};

export default connectDB;
