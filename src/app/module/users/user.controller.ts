import { Request, Response } from "express";
import { UserService } from "./user.service";
import { catchAsync } from "../../shared/catchAsync";


const createUser = catchAsync(async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await UserService.createUserService(payload);
    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: result
    });
});


const getAllUsers = catchAsync(async (req:Request, res:Response)=>{
    const result = await UserService.getAllUsersService();
    res.status(200).json({
        success: true,
        message: 'Users fetched successfully',
        data: result
    });
})
export const UserController = {
    createUser,
    getAllUsers
};