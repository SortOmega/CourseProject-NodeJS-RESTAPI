import bcrypt from "bcrypt";
import { Request, Response } from "express";
import UserModel from "../Schemas/User.schema";
import { ResponseBasicData } from "../Functions/Server-Responses";

const UserUpdatePasswordController = async (
  _Solicitud: Request,
  Respuesta: Response
) => {
  //recuperando los datos de locals de los middleware anteriores!
  const { id } = Respuesta.locals;
  console.log(id);

  const { oldPassword, newPassword } = _Solicitud.body;

  // ------- STATUS RESPONSES ------- //
  const error401 = ResponseBasicData(401, "Usuario no Autorizado!");
  const Success = ResponseBasicData(
    200,
    "Password del Usuario actualizado Exitosamente"
  );

  // ------- VALIDATING FROM MongoDB ------- //
  const usuarioExistenteByID = await UserModel.findById(id);
  if (!usuarioExistenteByID)
    return Respuesta.status(error401.Id).send(error401);

  const validOldPSW = await bcrypt.compare(
    oldPassword,
    usuarioExistenteByID.password as string
  );
  if (!validOldPSW) return Respuesta.status(error401.Id).send(error401);

  const hashedPassword = await bcrypt.hash(newPassword, 12);
  usuarioExistenteByID.password = hashedPassword;

  await usuarioExistenteByID.save();

  return Respuesta.send(Success);
};

export default UserUpdatePasswordController;
