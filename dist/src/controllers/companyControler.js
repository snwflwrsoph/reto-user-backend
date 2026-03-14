"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCompany = exports.modifyCompany = exports.getCompanyById = exports.getAllCompanies = exports.createCompany = void 0;
const company_1 = require("../models/company");
// Create and Save a new Company
const createCompany = (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).json({
            status: "Error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    // Save company in db
    const company = Object.assign({}, req.body);
    company_1.Company.create(company)
        .then((data) => {
        res.status(200).json({
            status: "Success",
            message: "Company successfully created",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "Error",
            message: "Something happened while creating a company. " + err.message,
            payload: null,
        });
    });
};
exports.createCompany = createCompany;
// Retrieve all companies from db
const getAllCompanies = (req, res) => {
    company_1.Company.findAll()
        .then((data) => {
        return res.status(200).json({
            status: "Success",
            message: "Companies successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "Error",
            message: "Something happened while retrieving all companies. " + err.message,
            payload: null,
        });
    });
};
exports.getAllCompanies = getAllCompanies;
// Find a single company with an id
const getCompanyById = (req, res) => {
    company_1.Company.findByPk(Number(req.params.id))
        .then((data) => {
        return res.status(200).json({
            status: "Success",
            message: "Company successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "Error",
            message: "Something happened while retrieving a product. " + err.message,
            payload: null,
        });
    });
};
exports.getCompanyById = getCompanyById;
// Update a company by the id in the request
const modifyCompany = (req, res) => {
    // Validate req
    if (!req.body) {
        return res.status(400).json({
            status: "Error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    company_1.Company.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "Success",
                message: "Company successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            return res.status(500).json({
                status: "Error",
                message: "Something happened while updating the company.",
                payload: null,
            });
        }
    })
        .catch((err) => {
        res.status(500).json({
            status: "Error",
            message: "Something happened while updating the company. " + err.message,
            payload: null,
        });
    });
};
exports.modifyCompany = modifyCompany;
// Delete a company with the specified id in the request
const deleteCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield company_1.Company.destroy({ where: { id } });
        res.status(200).json({ message: "Company deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting company",
            error,
        });
    }
});
exports.deleteCompany = deleteCompany;
//# sourceMappingURL=companyControler.js.map