import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import { NextFunction, Response, Request } from "express";
import { email_userDTOSchema, password_userDTOSchema } from "./DTO_Types";
import { ResponseLoginData } from "../Functions/Server-Responses";

const LoginDTOSchema = Type.Object(
  {
    email: email_userDTOSchema,
    password: password_userDTOSchema,
  },
  {
    additionalProperties: false,
    errorMessage: {
      additionalProperties: "Se han pasado parametros extra no requeridos!",
    },
  }
);

const ajv = new Ajv({ allErrors: true })
  .addKeyword("kind")
  .addKeyword("modifier");

addFormats(ajv, ["email"]);
ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addErrors(ajv);

const validateUserSchema = ajv.compile(LoginDTOSchema);

const UserLoginDTO = (
  Solicitud: Request,
  Respuesta: Response,
  Siguiente: NextFunction
) => {
  console.log("\n---------------------------------");

  const isDTOValid = validateUserSchema(Solicitud.body);
  if (!isDTOValid) {
    const Error = ResponseLoginData(
      400,
      ajv.errorsText(validateUserSchema.errors, {
        separator: "\n",
      }),
      "INVALID"
    );
    return Respuesta.status(Error.Id).send(Error);
  }
  return Siguiente();
};

export default UserLoginDTO;
