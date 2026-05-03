import { Router } from 'express';import bcrypt from 'bcryptjs';import jwt from 'jsonwebtoken';import { users } from '../data/mock.js';
const r=Router();
r.post('/signup', async (req,res)=>{const {email,password}=req.body; if(users.find(u=>u.email===email)) return res.status(400).json({message:'exists'}); const hash=await bcrypt.hash(password,10); users.push({id:Date.now().toString(),email,password:hash,addresses:[],wishlist:[]});res.json({message:'created'});});
r.post('/login', async (req,res)=>{const {email,password}=req.body; const user=users.find(u=>u.email===email); if(!user||!(await bcrypt.compare(password,user.password))) return res.status(400).json({message:'invalid'}); const token=jwt.sign({id:user.id,email:user.email},process.env.JWT_SECRET||'shimla-secret');res.json({token});});
export default r;
