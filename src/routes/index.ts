import { Router, Request, Response } from 'express';
import userRoutes from './userRoutes';
import companyRoutes from './companyRoutes';

const apiRouter:Router = Router();

apiRouter.use('/users', userRoutes);
apiRouter.use('/companies', companyRoutes);

apiRouter.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
})

export default apiRouter;