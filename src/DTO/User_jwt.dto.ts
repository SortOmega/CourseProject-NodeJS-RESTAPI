//import Dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import { jwtVerify } from "jose";
import { ResponseBasicData } from "../Functions/Server-Responses";

const UserJWT_DTO = async (
  Solicitud: Request,
  Respuesta: Response,
  Siguiente: NextFunction
) => {
  console.log("\n---------------------------------");
  const { authorization } = Solicitud.headers;

  // ------- STATUS RESPONSES ------- //
  const error401 = ResponseBasicData(401, "Usuario no Autorizado!");

  if (!authorization) return Respuesta.status(error401.Id).send(error401);

  //Hacer esto solo si se envia directamente desde el Auth > Bearer en solicitudes GET
  const jwt = authorization.split(" ")[1];
  if (!jwt) return Respuesta.status(error401.Id).send(error401); //*/

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
    return Respuesta.status(error401.Id).send(error401);
  }
};

export default UserJWT_DTO;
