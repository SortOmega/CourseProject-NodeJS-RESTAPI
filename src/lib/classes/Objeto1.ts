import { Gender, Profession } from "../../types";

export class Persona {
  #Nombre: String;
  #Apellido: String;
  #Sexo: Gender;
  #Edad: Number;
  constructor(Nombre: String, Apellido: String, Sexo: Gender, Edad: Number) {
    this.#Nombre = Nombre;
    this.#Apellido = Apellido;
    this.#Sexo = Sexo;
    this.#Edad = Edad;
  }
  public getInfo() {
    return {
      Nombre: this.#Nombre,
      Apellido: this.#Apellido,
      Sexo: this.#Sexo,
      Edad: this.#Edad,
    };
  }
}

export class Profesional extends Persona {
  private Titulo: Profession;
  constructor(
    Nombre: String,
    Apellido: String,
    Sexo: Gender,
    Edad: Number,
    Titulo: Profession
  ) {
    super(Nombre, Apellido, Sexo, Edad);
    this.Titulo = Titulo;
  }
  public getAllInfo() {
    return {
      Nombre: this.getInfo().Nombre,
      Apellido: this.getInfo().Apellido,
      Sexo: this.getInfo().Sexo,
      Edad: this.getInfo().Edad,
      Titulo: this.Titulo,
    };
  }
}
