
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const uploadRoutes = require('./uplaodExelRouter');


dotenv.config();


const app = express();


const MONGO_URI = process.env.MONGO_URI;


const connectDB = async () => {
  try {
   
    await mongoose.connect(MONGO_URI);
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Error connecting to database:', err.message);
    process.exit(1); 
  }
};


app.use('/api/v1/uploadExel', uploadRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB(); 
});
