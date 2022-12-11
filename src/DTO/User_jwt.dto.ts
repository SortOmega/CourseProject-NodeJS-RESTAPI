//import Dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import { jwtVerify } from "jose";

//Dotenv.config();

const UserJWT_DTO = async (
  Solicitud: Request,
  Respuesta: Response,
  Siguiente: NextFunction
) => {
  console.log("\n---------------------------------");
  const { authorization } = Solicitud.headers;

  if (!authorization)
    return Respuesta.status(401).send("Usuario no Autorizado!");

  //Hacer esto solo si se envia directamente desde el Auth > Bearer en solicitudes GET
  const jwt = authorization.split(" ")[1];
  if (!jwt) return Respuesta.status(401).send("Usuario no Autorizado!"); //*/

  try {
    const Encoder = new TextEncoder();

    const { payload } = await jwtVerify(
      jwt,
      Encoder.encode(process.env.JWT_PRV_KEY)
    );

    // EN typescript, no se puede enviar datos desde el Request al siguiente middleware,
    // pero si mediante 'Response.locals'

    Respuesta.locals = { id: payload.id };
    //console.log(Respuesta.locals); //*/

    return Siguiente();
  } catch (error) {
    console.log(error);
    return Respuesta.status(401).send("Usuario no Autorizado!");
  }
};

export default UserJWT_DTO;
