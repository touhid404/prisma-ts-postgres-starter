import { User } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createUserService = async (payload: User): Promise<User> => {

    const user = await prisma.user.create({
        data: payload,
    });

    return user;
}

const getAllUsersService = async (): Promise<User[]> => {
    return await prisma.user.findMany();
}

export const UserService = {
    createUserService,
    getAllUsersService
};