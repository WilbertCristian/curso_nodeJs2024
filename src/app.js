// const express = require('express');
import express from 'express';
import morgan from 'morgan';

const app = express();

//import rutas
import usersRoutes from './routes/users.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import authRoutes from './routes/auth.routes.js';
import { authenticateToken } from './middlewares/authenticate.middlware.js';

//Mildwares
app.use(morgan('dev'));
app.use(express.json());

//Usar Routes
app.use('/api/users', usersRoutes);
app.use('/api/tasks', authenticateToken,tasksRoutes);
app.use('/api/login', authRoutes);

export default app;
