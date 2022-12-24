import bcrypt from "bcrypt";
import { Request, Response } from "express";
import UserModel from "../Schemas/User.schema";
import { ResponseBasicData } from "../Functions/Server-Responses";

const UserUnregisterController = async (
  _Solicitud: Request,
  Respuesta: Response
) => {
  //recuperando los datos de locals de los middleware anteriores!
  const { id } = Respuesta.locals;
  //console.log(id);
  const { password } = _Solicitud.body;

  // ------- STATUS RESPONSES ------- //
  const error401 = ResponseBasicData(401, "Usuario no Autorizado!");
  const Success = ResponseBasicData(200, "Usuario Eliminado Correctamente!");

  // ------- VALIDATING FROM MongoDB ------- //
  const usuarioExistenteByID = await UserModel.findById(id);
  if (!usuarioExistenteByID)
    return Respuesta.status(error401.Id).send(error401);

  const validPSW = await bcrypt.compare(
    password,
    usuarioExistenteByID.password as string
  );
  if (!validPSW) return Respuesta.status(error401.Id).send(error401);

  await usuarioExistenteByID.delete();

  return Respuesta.send(Success);
};

export default UserUnregisterController;
