// create a new router
import express from 'express';
import addEvents from './controllers/eventsController/addEvents.js';
import updateEvent from './controllers/eventsController/updateEvent.js';
import showEvents from './controllers/eventsController/getAllEvents.js';
import deleteEvent from './controllers/eventsController/deleteEvent.js';
import showCenters from './controllers/centersController/getAllCenters.js';
import addCenter  from './controllers/centersController/addCenter.js';
import modifyCenter  from './controllers/centersController/modifyCenters.js';
import deleteCenter  from './controllers/centersController/deleteCenter.js';


const router = express.Router();

// defines routes
router.get('/', (req, res) => {
  res.send('hello, i am the app');
});

// routes for events
router.get('/events', showEvents);
router.post('/events', addEvents);
router.put('/events/:eventsId', updateEvent);
router.delete('/events/:eventsId', deleteEvent);

// routes for centers
router.get('/centers', showCenters);
router.post('/centers', addCenter);
router.put('/centers/:centerId', modifyCenter);
router.delete('/events/:eventsId', deleteCenter);



// export out router to be used when required

export default router;
