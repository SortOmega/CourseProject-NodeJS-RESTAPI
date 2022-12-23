import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { Request, Response } from "express";
import UserModel from "../Schemas/User.schema";
import { ResponseLoginData } from "../Functions/Server-Responses";

const UserLoginController = async (Solicitud: Request, Respuesta: Response) => {
  const { email, password } = Solicitud.body;

  const error401 = ResponseLoginData(
    401,
    "Credenciales Incorrectas!",
    "INVALID"
  );

  const usuarioExistenteByEmail = await UserModel.findOne({ email }).exec();
  if (!usuarioExistenteByEmail)
    return Respuesta.status(error401.Id).send(error401);

  const validPSW = await bcrypt.compare(
    password,
    usuarioExistenteByEmail.password as string
  );
  if (!validPSW) return Respuesta.status(error401.Id).send(error401);

  //AHora vamos a generar el TOKEN ---------------------------

  const Encoder = new TextEncoder();

  const JWTConstructor = new SignJWT({ id: usuarioExistenteByEmail._id });
  const jwt = await JWTConstructor.setProtectedHeader({
    alg: "HS256",
    typ: "JWT",
  })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(Encoder.encode(process.env.JWT_PRV_KEY));

  //return Respuesta.send(jwt);
  const SuccessLogin = ResponseLoginData(
    200,
    `Te has logueado, Bienvenido seas ${usuarioExistenteByEmail.name} ${usuarioExistenteByEmail.surname}`,
    jwt
  );

  return Respuesta.send(SuccessLogin); //*/
};

export default UserLoginController;
