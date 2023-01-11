import { Type } from "@sinclair/typebox";
export const id_userDTOSchema = Type.String({
  format: "uuid",
  errorMessage: {
    type: "El tipo de _id no es válido, debe ser un string!",
    format: "El formato de _id no es válido, debe ser de uuid!",
  },
});

export const name_userDTOSchema = Type.String({
  minLength: 2,
  maxLength: 20,
  errorMessage: {
    minLength: "El nombre debe tener por minimo 2 caracteres",
    maxLength: "El nombre debe tener por maximo 20 caracteres",
  },
});

export const surname_userDTOSchema = Type.String({
  minLength: 4,
  maxLength: 50,
  errorMessage: {
    minLength: "El surname debe tener por minimo 4 caracteres",
    maxLength: "El surname debe tener por maximo 50 caracteres",
  },
});

export const email_userDTOSchema = Type.String({
  format: "email",
  errorMessage: {
    type: "El tipo de email debe ser un string!",
    format:
      'El formato del email no es válido, debe cumplir el RFC 5322, cuyo dominio debe ser "@omega.support.com"',
  },
});

export const password_userDTOSchema = Type.String({
  format: "password",
  minLength: 10,
  maxLength: 25,
  errorMessage: {
    type: "El tipo de password debe ser un string!",
    format:
      "El formato del password no es válido, debe contener por lo menos una Mayuscula, una Minuscula y un número!",
    minLength: "El password debe tener por minimo 10 caracteres",
    maxLength: "El password debe tener por maximo 25 caracteres",
  },
});
