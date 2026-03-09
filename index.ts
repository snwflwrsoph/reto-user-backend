import express, {Express, Request, Response} from 'express';
import morgan from 'morgan';
import apiRouter from './src/routes';

const app:Express = express(); 
const port = 3000; 

app.use(morgan('dev'))
app.use(express.json());
app.use(apiRouter);

app.listen(port, () => {
    console.log(`User panel app listening on port ${port}`)
})