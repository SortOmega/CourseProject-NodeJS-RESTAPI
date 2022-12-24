import bcrypt from "bcrypt";
import { Request, Response } from "express";
import UserModel from "../Schemas/User.schema";
import { ResponseBasicData } from "../Functions/Server-Responses";

const UserRegisterController = async (
  Solicitud: Request,
  Respuesta: Response
) => {
  const { _id, name, surname, email, password } = Solicitud.body;

  // ------- STATUS RESPONSES ------- //
  const error409 = ResponseBasicData(
    409,
    "Usuario ya existe, no se puede registrar nuevamente"
  );
  const Success = ResponseBasicData(
    201,
    "Usuario registrado de manera Exitosa"
  );

  // ------- VALIDATING FROM MongoDB ------- //
  const usuarioExistenteByID = await UserModel.findById(_id).exec();
  if (usuarioExistenteByID) return Respuesta.status(error409.Id).send(error409);

  const usuarioExistenteByEmail = await UserModel.findOne({ email });
  if (usuarioExistenteByEmail)
    return Respuesta.status(error409.Id).send(error409);

  //Procederemos a usar un hash para proteger la contraseña, usaremos el paquete 'bcrypt'
  //Ver documentacion para ver los tipos de hash posibles
  const hashedPassword = await bcrypt.hash(password, 12);

  const usuario = new UserModel({
    _id,
    name,
    surname,
    email,
    password: hashedPassword,
  });

  await usuario.save();

  return Respuesta.status(Success.Id).send(Success);
};

export default UserRegisterController;
