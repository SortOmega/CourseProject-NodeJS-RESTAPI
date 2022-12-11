import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { Request, Response } from "express";
import UserModel from "../Schemas/User.schema";

const UserLoginController = async (Solicitud: Request, Respuesta: Response) => {
  const { email, password } = Solicitud.body;

  const error401: string = "Credenciales Incorrectas!";

  const usuarioExistenteByEmail = await UserModel.findOne({ email }).exec();
  if (!usuarioExistenteByEmail) return Respuesta.status(401).send(error401);

  const validPSW = await bcrypt.compare(
    password,
    usuarioExistenteByEmail.password as string
  );
  if (!validPSW) return Respuesta.status(401).send(error401);

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
  return Respuesta.send({
    loginMessage: `Te has logueado, Bienvenido seas ${usuarioExistenteByEmail.name} ${usuarioExistenteByEmail.surname}`,
    jwt,
  }); //*/
};

export default UserLoginController;
