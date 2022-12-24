import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors";
import { NextFunction, Response, Request } from "express";
import { password_userDTOSchema } from "./DTO_Types";
import { ResponseBasicData } from "../Functions/Server-Responses";

const UnregisterDTOSchema = Type.Object(
  {
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

ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addErrors(ajv);

const validateUserSchema = ajv.compile(UnregisterDTOSchema);

const UserUnregisterDTO = (
  Solicitud: Request,
  Respuesta: Response,
  Siguiente: NextFunction
) => {
  console.log("\n---------------------------------");

  const isDTOValid = validateUserSchema(Solicitud.body);

  const error400 = ResponseBasicData(
    400,
    ajv.errorsText(validateUserSchema.errors, { separator: "\n" })
  );

  if (!isDTOValid) return Respuesta.status(error400.Id).send(error400);
  return Siguiente();
};

export default UserUnregisterDTO;
