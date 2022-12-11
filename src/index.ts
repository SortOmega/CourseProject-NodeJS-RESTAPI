import "./config/env_config";
import { ConnectMogoDB } from "./config/DataBase_config";
import httpServer from "./config/Http_config";

const PUERTO = process.env.PORT;
const BootstrapConnect = async (_MongoDB_URL: string) => {
  await ConnectMogoDB(process.env.MONGODB_URL as string);
  httpServer.listen(PUERTO, () => {
    console.log(`El Servidor ha sido arrancado en el puerto *:${PUERTO}`);
  });
};

BootstrapConnect(process.env.MONGODB_URL as string);
