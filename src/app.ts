import express, { Application } from "express";
import { UserRoute } from "./app/module/users/user.route";

const app: Application = express();


// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());


// Importing routes
app.use("/api/v1", UserRoute);

export default app;