import express from 'express';
import cors from 'cors';    
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import authRouter from './routes/authRoute.js'; 
import userRouter from './routes/userRoute.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true                // allow cookies
}));
app.use(express.json());
app.use(cookieParser());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use('/api/auth', authRouter) 
app.use('/api/user', userRouter)


// Connect to MongoDB
mongoose.connect("mongodb+srv://pmeet9305_db_user:LcUdkTcdXQzlncF5@backenddb.wpmo3qo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});