import bcrypt from "bcrypt";
import { Request, Response } from "express";
import UserModel from "../Schemas/User.schema";

const UserRegisterController = async (
  Solicitud: Request,
  Respuesta: Response
) => {
  const { _id, name, surname, email, password } = Solicitud.body;

  const error409: string =
    "Usuario ya existe, no se puede registrar nuevamente";

  const usuarioExistenteByID = await UserModel.findById(_id).exec();
  if (usuarioExistenteByID) return Respuesta.status(409).send(error409);

  const usuarioExistenteByEmail = await UserModel.findOne({ email });
  if (usuarioExistenteByEmail) return Respuesta.status(409).send(error409);

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

  return Respuesta.status(201).send("Usuario registrado de manera Exitosa");
};

export default UserRegisterController;
