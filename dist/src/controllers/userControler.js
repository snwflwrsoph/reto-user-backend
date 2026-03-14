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
exports.deleteUser = exports.modifyUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const user_1 = require("../models/user");
const company_1 = require("../models/company");
// Create and Save a new user
const createUser = (req, res) => {
    //Validate request
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    const user = Object.assign({}, req.body);
    user_1.User.create(user)
        .then((data) => {
        res.status(200).json({
            status: "Success",
            message: "USer successfully created",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened while creating a user. " + err.message,
            payload: null,
        });
    });
};
exports.createUser = createUser;
// Retrieve all users from the database
const getAllUsers = (req, res) => {
    user_1.User.findAll({
        attributes: { exclude: ["companyId"] },
        include: [{ model: company_1.Company, attributes: ["id", "name"] }],
    })
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Users successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "Error",
            message: "Something happened while retrieving all user. " + err.message,
            payload: null,
        });
    });
};
exports.getAllUsers = getAllUsers;
//Find a single user with an id
const getUserById = (req, res) => {
    user_1.User.findByPk(Number(req.params.id))
        .then((data) => {
        return res.status(200).json({
            status: "Success",
            message: "User successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "Error",
            message: "Something happened while retrieving user. " + err.message,
            payload: null,
        });
    });
};
exports.getUserById = getUserById;
//Update user by the id in the request
const modifyUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Validate req
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }
    //save user
    user_1.User.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "User successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            return res.status(500).json({
                status: "Error",
                message: "Something happened while updating the user.",
                payload: null,
            });
        }
    })
        .catch((err) => {
        res.status(500).json({
            status: "Error",
            message: "Something happened while updating a user. " + err.message,
            payload: null,
        });
    });
});
exports.modifyUser = modifyUser;
//Delete a user with the specific id in the request
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield user_1.User.destroy({ where: { id } });
        res.status(200).json({ message: "User deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting user",
            error,
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=userControler.js.map