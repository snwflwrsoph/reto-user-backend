"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.get('/', (req, res) => {
    res.send('Get a list of users');
});
userRouter.get('/:id', (req, res) => {
    res.send(`Get the user ${req.params.id}`);
});
userRouter.post('/', (req, res) => {
    res.send(`Create a new user with ID: ${req.body.id}`);
});
userRouter.patch('/:id', (req, res) => {
    res.send(`Update the user ${req.params.id} with the values of ${req.body.name}, ${req.body.email}, ${req.body.password}, ${req.body.isAdmin}`);
});
userRouter.delete('/', (req, res) => {
    res.send(`Deleting the user ${req.body.id}`);
});
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map