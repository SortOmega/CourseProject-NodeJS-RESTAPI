import Express from "express";
import path from "path";
import UserRouter from "../routers/User.router";

const ExpressApp = Express();

//TO DO: Ingrese todo el codigo de configuracion abajo
//  ##  MIDLEWARES
ExpressApp.use(Express.json());

const StaticPublic = path.join(__dirname, "../../public");
ExpressApp.use(Express.static(StaticPublic));

//  ##  ROUTES
ExpressApp.use("/user", UserRouter);
//-------------------------------------------------------------
export default ExpressApp;
