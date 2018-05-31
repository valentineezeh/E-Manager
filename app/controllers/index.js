import express from 'express';

const router = express.Router();

router.use('/events', require('./events'));


export default router;
