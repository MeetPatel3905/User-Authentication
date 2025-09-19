import express from 'express';
import cors from 'cors';    
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import authRouter from './routes/authRoute.js'; 

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use('/api/auth', authRouter) 


// Connect to MongoDB
mongoose.connect("mongodb+srv://pmeet9305_db_user:LcUdkTcdXQzlncF5@backenddb.wpmo3qo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});