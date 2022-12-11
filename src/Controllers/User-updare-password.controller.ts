import bcrypt from "bcrypt";
import { Request, Response } from "express";
import UserModel from "../Schemas/User.schema";

const UserUpdatePasswordController = async (
  _Solicitud: Request,
  Respuesta: Response
) => {
  //recuperando los datos de locals de los middleware anteriores!
  const { id } = Respuesta.locals;
  console.log(id);

  const { oldPassword, newPassword } = _Solicitud.body;

  const error401: string = "Usuario no Autorizado!";

  const usuarioExistenteByID = await UserModel.findById(id);
  if (!usuarioExistenteByID) return Respuesta.status(401).send(error401);

  const validOldPSW = await bcrypt.compare(
    oldPassword,
    usuarioExistenteByID.password as string
  );
  if (!validOldPSW) return Respuesta.status(401).send(error401);

  const hashedPassword = await bcrypt.hash(newPassword, 12);
  usuarioExistenteByID.password = hashedPassword;

  await usuarioExistenteByID.save();

  return Respuesta.send("Password del Usuario actualizado Exitosamente");
};

export default UserUpdatePasswordController;
