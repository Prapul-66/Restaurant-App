import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './database/db.Connection.js';
import errorMiddleware from './error/error.js';
import reservationRoutes from './routes/reservationRoutes.js';


const app = express();

dotenv.config({path: './config/config.env'});

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRoutes);

dbConnection();

app.use(errorMiddleware);
// Import routes

export default app;