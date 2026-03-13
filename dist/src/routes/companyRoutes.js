"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const companyRouter = (0, express_1.Router)();
companyRouter.get('/', (req, res) => {
    res.send('Get a list of companies');
});
companyRouter.get('/:id', (req, res) => {
    res.send(`Get the product ${req.params.id}`);
});
companyRouter.post('/', (req, res) => {
    res.send(`Create a new product with ID: ${req.body.id}`);
});
companyRouter.patch('/:id', (req, res) => {
    res.send(`Update the product ${req.params.id} with the values of ${req.body.name}, ${req.body.tier}, ${req.body.contact} and ${req.body.address}`);
});
companyRouter.delete('/', (req, res) => {
    res.send(`Deleting the product ${req.body.id}`);
});
exports.default = companyRouter;
//# sourceMappingURL=companyRoutes.js.map