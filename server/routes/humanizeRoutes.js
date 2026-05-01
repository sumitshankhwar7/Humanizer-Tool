import express from 'express';
import { testConnection, humanizeContent } from '../controllers/humanizeController.js';

const router = express.Router();

router.get('/test', testConnection);
router.post('/rewrite', humanizeContent);

export default router;
