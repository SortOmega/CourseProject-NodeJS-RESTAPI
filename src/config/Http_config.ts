import ExpressApp from "./Express_config";
import HTTP from "http";

const httpServer = HTTP.createServer(ExpressApp);

export default httpServer;
