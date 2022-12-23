import { Request, Response, NextFunction } from "express";
import Cors from "cors";
// CORS stands for 'Cross-Origin Resource Sharing'

const corsOptions: Cors.CorsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  allowedHeaders: [
    "Accept",
    "Content-Type",
    "Access-Control-Allow-Methods",
    "Access-Control-Allow-Origin",
    "Access-Control-Allow-Headers",
  ],
};

const whitelist = ["http://localhost:5173", "http://localhost:4173"];
const corsDynamicOptions: Cors.CorsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin as string) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

function CorsHeaders(
  _Solicitud: Request,
  Respuesta: Response,
  Siguiente: NextFunction
) {
  Respuesta.header("Access-Control-Allow-Origin", "*");
  Respuesta.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  Respuesta.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  Siguiente();
}

export { Cors, corsOptions, corsDynamicOptions, CorsHeaders };
