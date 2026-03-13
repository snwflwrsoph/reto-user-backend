import { Router, Request, Response } from 'express';
const companyRouter:Router = Router();

companyRouter.get('/', (req:Request, res:Response) => {
    res.send('Get a list of companies')
});

companyRouter.get('/:id', (req:Request, res:Response) => {
    res.send(`Get the product ${req.params.id}`)
});

companyRouter.post('/', (req:Request, res:Response) => {
    res.send(`Create a new product with ID: ${req.body.id}`)
});

companyRouter.patch('/:id', (req:Request, res:Response) => {
    res.send(`Update the product ${req.params.id} with the values of ${req.body.name}, ${req.body.tier}, ${req.body.contact} and ${req.body.address}`)
});

companyRouter.delete('/', (req:Request, res:Response) => {
    res.send(`Deleting the product ${req.body.id}`)
});

export default companyRouter;