import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors";
import { NextFunction, Response, Request } from "express";
import { name_userDTOSchema, surname_userDTOSchema } from "./DTO_Types";

const UpdateDataDTOSchema = Type.Object(
  {
    name: name_userDTOSchema,
    surname: surname_userDTOSchema,
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
/*addFormats(ajv, ["email", "uuid"]).addKeyword("kind").addKeyword("modifier");
ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);//*/
addErrors(ajv);

const validateUserSchema = ajv.compile(UpdateDataDTOSchema);

const UserUpdateDataDTO = (
  Solicitud: Request,
  Respuesta: Response,
  Siguiente: NextFunction
) => {
  console.log("\n---------------------------------");

  const isDTOValid = validateUserSchema(Solicitud.body);

  if (!isDTOValid)
    return Respuesta.status(400).send(
      ajv.errorsText(validateUserSchema.errors, { separator: "\n" })
    );
  return Siguiente();
};

export default UserUpdateDataDTO;
