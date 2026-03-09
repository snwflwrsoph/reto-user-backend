import { Router, Request, Response } from 'express';
const userRouter:Router = Router();

userRouter.get('/', (req:Request, res:Response) => {
    res.send('Get a list of users')
});

userRouter.get('/:id',(req:Request, res:Response) => {
    res.send(`Get the user ${req.params.id}`)
});

userRouter.post('/', (req:Request, res:Response) => {
    res.send(`Create a new user with ID: ${req.body.id}`)
});

userRouter.patch('/:id', (req:Request, res:Response) => {
    res.send(`Update the user ${req.params.id} with the values of ${req.body.name}, ${req.body.email}, ${req.body.password}, ${req.body.isAdmin}`)
});

userRouter.delete('/', (req:Request, res:Response) => {
    res.send(`Deleting the user ${req.body.id}`)
});

export default userRouter;