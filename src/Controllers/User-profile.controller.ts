import { Request, Response } from "express";
import UserModel from "../Schemas/User.schema";

const UserProfileController = async (
  _Solicitud: Request,
  Respuesta: Response
) => {
  //recuperando los datos de locals de los middleware anteriores!
  const { id } = Respuesta.locals;

  const error401: string = "Usuario no Autorizado!";

  const usuarioExistenteByID = await UserModel.findById(id);
  if (!usuarioExistenteByID) return Respuesta.status(401).send(error401);

  const { _id, name, surname, email } = usuarioExistenteByID;

  return Respuesta.send({ _id, name, surname, email });
};

export default UserProfileController;
