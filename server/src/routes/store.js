import { Router } from 'express';import { orders } from '../data/mock.js';
const r=Router();
r.get('/products',(req,res)=>res.json([{name:'Himachali Chukh'},{name:'Mango Pickle'},{name:'Lal Bharwa Mirch'}]));
r.post('/checkout',(req,res)=>res.json({orderId:'SS'+Math.floor(1000+Math.random()*9000),message:'Order placed'}));
r.get('/tracking/:id',(req,res)=>res.json(orders[0]));
export default r;
