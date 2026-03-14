"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const companyControler_1 = require("../controllers/companyControler");
const companyRouter = (0, express_1.Router)();
companyRouter.get('/', companyControler_1.getAllCompanies);
companyRouter.get('/:id', companyControler_1.getCompanyById);
companyRouter.post('/', companyControler_1.createCompany);
companyRouter.patch('/:id', companyControler_1.modifyCompany);
companyRouter.delete('/', companyControler_1.deleteCompany);
exports.default = companyRouter;
//# sourceMappingURL=companyRoutes.js.map