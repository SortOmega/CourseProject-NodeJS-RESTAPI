import { Request, Response } from "express";
import UserModel from "../Schemas/User.schema";
import { ResponseBasicData } from "../Functions/Server-Responses";

const UserProfileController = async (
  _Solicitud: Request,
  Respuesta: Response
) => {
  //recuperando los datos de locals de los middleware anteriores!
  const { id } = Respuesta.locals;

  // ------- STATUS RESPONSES ------- //
  const error401 = ResponseBasicData(401, "Usuario no Autorizado!");

  // ------- VALIDATING FROM MongoDB ------- //
  const usuarioExistenteByID = await UserModel.findById(id);
  if (!usuarioExistenteByID)
    return Respuesta.status(error401.Id).send(error401);

  const { _id, name, surname, email } = usuarioExistenteByID;

  return Respuesta.send({ Id: 200, profile: { _id, name, surname, email } });
};

export default UserProfileController;
