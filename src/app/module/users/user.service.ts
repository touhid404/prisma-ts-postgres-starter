import { User } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createUserService  = async (payload: User):Promise<User> => {

    const user = await prisma.user.create({
        data: payload,
    });

    return user;
}



export const UserService = {
    createUserService
};