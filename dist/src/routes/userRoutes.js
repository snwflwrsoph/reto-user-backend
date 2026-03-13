"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControler_1 = require("../controllers/userControler");
const userRouter = (0, express_1.Router)();
userRouter.get('/', userControler_1.getAllUsers);
userRouter.get('/:id', userControler_1.getUserById);
userRouter.post('/', userControler_1.createUser);
userRouter.patch('/:id', userControler_1.modifyUser);
userRouter.delete('/', userControler_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map