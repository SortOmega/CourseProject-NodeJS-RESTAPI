import Express from "express";
import mainAPI from "../routers/API.router";
import { Cors, CorsHeaders, corsOptions } from "./CORS-config";
const ExpressApp = Express();

// CONFIGURE ROUTES WITH CORS
mainAPI.options("*", Cors(corsOptions));
//TO DO: Ingrese todo el codigo de configuracion abajo
//  ##  MIDLEWARES
ExpressApp.use(Express.json());
//  ##  ROUTES
ExpressApp.use("/api", CorsHeaders, mainAPI);
//-------------------------------------------------------------
export default ExpressApp;
