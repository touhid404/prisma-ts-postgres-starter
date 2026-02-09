import { Request, Response } from "express";
import { UserService } from "./user.service";


const createUser = async (req:Request, res:Response) => {
    try {
        const user = await UserService.createUserService(req.body);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user  
        });
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message || "Failed to create user" });
    }
};

export const UserController = {
    createUser
};