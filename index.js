import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRoutes from './routes/auth.routes.js'; 
import cors from "cors"
// adjust this path if needed

dotenv.config()
const app = express();

// Middleware to parse JSON request body

app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
// Routes
app.use('/api/auth', authRoutes); // example route setup

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB()
});
