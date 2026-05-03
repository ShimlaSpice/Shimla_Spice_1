import express from 'express';import cors from 'cors';import authRoutes from './routes/auth.js';import storeRoutes from './routes/store.js';
const app=express();app.use(cors());app.use(express.json());app.use('/api/auth',authRoutes);app.use('/api',storeRoutes);app.get('/',(req,res)=>res.send('Shimla Spice API running'));app.listen(process.env.PORT||5000,()=>console.log('API on 5000'));
