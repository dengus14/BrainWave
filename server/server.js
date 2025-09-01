require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const express = require('express')
const cors = require('cors');

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

