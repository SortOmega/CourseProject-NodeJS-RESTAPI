import Express from "express";
import UserRouter from "./User.router";

const mainAPI = Express.Router();

mainAPI.use("/user", UserRouter);

export default mainAPI;
