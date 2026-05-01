import express from 'express';
import { createArticle } from '../controllers/articleController.js';

const router = express.Router();

router.post('/generate', createArticle);

export default router;
