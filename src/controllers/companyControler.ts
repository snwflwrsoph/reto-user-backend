import { RequestHandler, Request, Response } from "express";
import { Company } from "../models/company";

// Create and Save a new Company
export const createCompany: RequestHandler = (req:Request, res:Response) => {
    // Validate request
    if (!req.body){
        return res.status(400).json({
            status:"Error",
            message:"Content can not be empty",
            payload: null,
        });
    }
    // Save company in db
    const company = { ...req.body };
    Company.create(company)
        .then((data: Company | null) => {
            res.status(200).json({
                status:"Success",
                message:"Company successfully created",
                payload: data,
            });
        })
        .catch((err) => {
            res.status(500).json({
                status:"Error",
                message: "Something happened while creating a company. " + err.message,
                payload: null,
            });
        });
};

// Retrieve all companies from db
export const getAllCompanies: RequestHandler = (req:Request, res:Response) => {
    Company.findAll()
        .then((data: Company[]) => {
            return res.status(200).json({
                status:"Success",
                message:"Companies successfully retrieved",
                payload: data,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                status:"Error",
                message:"Something happened while retrieving all companies. " + err.message,
                payload:null,
            });
        });
};

// Find a single company with an id
export const getCompanyById: RequestHandler = (req:Request, res:Response) => {
    Company.findByPk(Number(req.params.id))
        .then((data: Company | null) => {
            return res.status(200).json({
                status:"Success",
                message:"Company successfully retrieved",
                payload: data,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                status:"Error",
                message:"Something happened while retrieving a product. " + err.message,
                payload:null,
            });
        });
};

// Update a company by the id in the request
export const modifyCompany: RequestHandler = (req:Request, res:Response) => {
    // Validate req
    if (!req.body) {
        return res.status(400).json({
            status:"Error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    Company.update({ ...req.body }, {where : { id: req.params.id } })
        .then((isUpdated) => {
            if(isUpdated) {
                return res.status(200).json({
                    status:"Success",
                    message: "Company successfully updated",
                    payload: { ...req.body },
                });
            } else {
                return res.status(500).json({
                    status:"Error",
                    message:"Something happened while updating the company.", 
                    payload: null,
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                status:"Error",
                message:"Something happened while updating the company. " + err.message,
                payload: null,
            });
        });
};

// Delete a company with the specified id in the request
export const deleteCompany: RequestHandler = async(req:Request, res:Response): Promise<void> => {
    const { id } = req.body;
    try {
        await Company.destroy({ where: { id } });
        res.status(200).json({ message: "Company deleted"});
    } catch (error) {
        res.status(500).json({
            message:"Error deleting company",
            error,
        });
    }
};