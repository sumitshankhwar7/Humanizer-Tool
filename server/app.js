import express from 'express';
import cors from 'cors';
import humanizeRoutes from './routes/humanizeRoutes.js';
import articleRoutes from './routes/articleRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/humanize', humanizeRoutes);
app.use('/api/article', articleRoutes);

// Base Route
app.get('/', (req, res) => {
    res.send('Humanizer API is running');
});

// Error handling
app.use(errorHandler);

export default app;
