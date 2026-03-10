import { RequestHandler, Request, Response } from "express";
import { User } from "../models/user";

// Create and Save a new user
export const createUser: RequestHandler = (req:Request, res:Response) => {
    //Validate request
    if(!req.body) {
        return res.status(400).json({
            status:"error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    const user = { ...req.body};
    User.create(user)
        .then((data:User | null) => {
            res.status(200).json({
                status:"Success",
                message:"USer successfully created",
                payload: data,
            });
        })
        .catch((err) => {
            res.status(500).json({
                status:"error",
                message: "Something happened while creating a user. " + err.message,
                payload: null,
            });
        });
};

// Retrieve all users from the database
export const getAllUsers: RequestHandler = (req:Request, res:Response) => {
    User.findAll()
    .then((data: User[]) => {
        return res.status(200).json({
            status:"success",
            message:"Users successfully retrieved",
            payload: data,
        });
    })
    .catch((err) => {
        return res.status(500).json({
            status:"Error",
            message:"Something happened while retrieving all user. " + err.message,
            payload:null,
        });
    });
};

//Find a single user with an id
export const getUserById: RequestHandler = (req:Request, res:Response) => {
    User.findByPk(Number(req.params.id))
    .then((data: User | null) => {
        return res.status(200).json({
            status: "Success",
            message:"User successfully retrieved",
            payload: data,
        });
    })
    .catch((err) =>{
        return res.status(500).json({
            status:"Error",
            message:"Something happened while retrieving user. " + err.message,
            payload: null,
        });
    });
};

//Update user by the id in the request
export const modifyUser: RequestHandler = async (req:Request, res:Response) => {
    //Validate req
    if(!req.body) {
        return res.status(400).json({
            status:"error",
            message:"Content can not be empty.",
            payload: null,
        });
    }

    //save user
    User.update({ ...req.body }, { where: { id: req.params.id} })
    .then((isUpdated) =>{
        if(isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "User successfully updated",
                payload: {...req.body},
            });
        } else {
            return res.status(500).json({
                status:"Error",
                message: "Something happened while updating the user.",
                payload: null,
            });
        }
    })
    .catch((err) => {
        res.status(500).json({
            status:"Error",
            message: "Something happened while updating a user. " +err.message,
            payload: null,
        });
    });
};

//Delete a user with the specific id in the request
export const deleteUser: RequestHandler = async (req:Request, res:Response): Promise<void> => {
    const {id} = req.body;
    try {
        await User.destroy({ where: { id } });
        res.status(200).json({ message: "User deleted"});
    } catch (error) {
        res.status(500).json({
            message: "Error deleting user",
            error,
        });
    }
};





