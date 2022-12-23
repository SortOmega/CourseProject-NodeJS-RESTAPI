import Express from "express";
import UserRouter from "../routers/User.router";
import { Cors, CorsHeaders, corsOptions } from "./CORS-config";
const ExpressApp = Express();

// CONFIGURE ROUTES WITH CORS
UserRouter.options("*", Cors(corsOptions));
//TO DO: Ingrese todo el codigo de configuracion abajo
//  ##  MIDLEWARES
ExpressApp.use(Express.json());
//  ##  ROUTES
ExpressApp.use("/user", CorsHeaders, UserRouter);
//-------------------------------------------------------------
export default ExpressApp;
