import bcrypt from "bcrypt";
import { Request, Response } from "express";
import UserModel from "../Schemas/User.schema";

const UserUpdateEmailController = async (
  _Solicitud: Request,
  Respuesta: Response
) => {
  //recuperando los datos de locals de los middleware anteriores!
  const { id } = Respuesta.locals;
  console.log(id);

  const { email, password } = _Solicitud.body;

  const error401: string = "Usuario no Autorizado!";

  const usuarioExistenteByID = await UserModel.findById(id);
  if (!usuarioExistenteByID) return Respuesta.status(401).send(error401);

  const validPSW = await bcrypt.compare(
    password,
    usuarioExistenteByID.password as string
  );
  if (!validPSW) return Respuesta.status(401).send(error401);
  usuarioExistenteByID.email = email;

  await usuarioExistenteByID.save();

  return Respuesta.send("Email del Usuario actualizado Exitosamente");
};

export default UserUpdateEmailController;
