import { Request, Response } from "express";
import UserModel from "../Schemas/User.schema";

const UserUpdateDataController = async (
  _Solicitud: Request,
  Respuesta: Response
) => {
  //recuperando los datos de locals de los middleware anteriores!
  const { id } = Respuesta.locals;
  console.log(id);

  const { name, surname } = _Solicitud.body;

  const error401: string = "Usuario no Autorizado!";

  const usuarioExistenteByID = await UserModel.findById(id);
  if (!usuarioExistenteByID) return Respuesta.status(401).send(error401);

  usuarioExistenteByID.name = name;
  usuarioExistenteByID.surname = surname;

  await usuarioExistenteByID.save();

  return Respuesta.send("Usuario actualizado Exitosamente");
};

export default UserUpdateDataController;
