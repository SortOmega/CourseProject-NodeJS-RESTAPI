import Express from "express";
import UserRouter from "../routers/User.router";

const ExpressApp = Express();

//TO DO: Ingrese todo el codigo de configuracion abajo
//  ##  MIDLEWARES
ExpressApp.use(Express.json());

//  ##  ROUTES
ExpressApp.use("/user", UserRouter);
//-------------------------------------------------------------
export default ExpressApp;
