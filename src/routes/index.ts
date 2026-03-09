import { Router, Request, Response } from 'express';
import userRoutes from './userRoutes';

const apiRouter:Router = Router();

apiRouter.use('/users', userRoutes);

apiRouter.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
})

export default apiRouter;