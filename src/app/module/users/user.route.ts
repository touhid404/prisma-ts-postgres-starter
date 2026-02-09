import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.post("/users",UserController.createUser);
router.get("/users", UserController.getAllUsers);



export const UserRoute = router;