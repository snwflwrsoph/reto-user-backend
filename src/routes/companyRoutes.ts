import { Router, Request, Response } from 'express';
import { createCompany, 
    deleteCompany, 
    getAllCompanies, 
    getCompanyById, 
    modifyCompany } from '../controllers/companyControler';

const companyRouter:Router = Router();

companyRouter.get('/', getAllCompanies);
companyRouter.get('/:id', getCompanyById);
companyRouter.post('/', createCompany);
companyRouter.patch('/:id', modifyCompany);
companyRouter.delete('/', deleteCompany);

export default companyRouter;