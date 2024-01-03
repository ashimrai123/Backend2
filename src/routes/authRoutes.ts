// src/routes/authRoutes.ts
import express from 'express';
import { signup } from '../controllers/authControllers';

const router = express.Router();

router.post('/signup', signup);

export default router;
