import mongoose from "mongoose";

export const ConnectMogoDB = (MongoDB_URL: string) =>
  mongoose
    .connect(MongoDB_URL)
    .then(() => console.log("Conectado Correctamente al MongoDB"));
