import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import router from './app/routes';


const app = express();


// configurations
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extented: false }));

// connect all routes to application
app.use('/api/v1/', router);

const port = process.env.PORT || 3000;

// Turn on the server
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});

export default app;
