import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import express from 'express';
import cors from 'cors';
import { OpenAI } from 'openai/client.js';

dotenv.config();


const app = express();
const port = process.env.PORT || 4001

const router = express.Router()
//MONGODB CONNECTION
connectDB()

//MIDDLEWARE
app.use(cors({
  origin: "https://localhost:3000",  
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}
));
app.use(express.json());


//ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/health', (req, res) => {
  console.log('Health check hit');
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`ChatBot listening at ${port}`)
})

