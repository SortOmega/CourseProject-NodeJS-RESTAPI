import Express from "express";
import UserJWT_DTO from "../DTO/User_jwt.dto";
import UserLoginDTO from "../DTO/User_login.dto";
import UserRegisterDTO from "../DTO/User_register.dto";
import UserUpdateDataDTO from "../DTO/User_update_data.dto";
import UserUpdatePasswordDTO from "../DTO/User_update_password.dto";
import UserUpdateEmailDTO from "../DTO/User_update_email.dto";
import UserUnregisterDTO from "../DTO/User_unregister.dto";
import UserRegisterController from "../Controllers/User-register.controller";
import UserLoginController from "../Controllers/User-login.controller";
import UserProfileController from "../Controllers/User-profile.controller";
import UserUpdateDataController from "../Controllers/User-updare-data.controller";
import UserUpdateEmailController from "../Controllers/User-updare-email.controller";
import UserUpdatePasswordController from "../Controllers/User-updare-password.controller";
import UserUnregisterController from "../Controllers/User-unregister.controller";

const UserRouter = Express.Router();

// ROUTES BELOW
UserRouter.post("/register", UserRegisterDTO, UserRegisterController);
UserRouter.post("/login", UserLoginDTO, UserLoginController);

//Todos los middlewares despues de UserJWT_DTO extenderan el id en Response.locals
// esto para que se puedan ejecutar la autenticacion antes de realizar operaciones
UserRouter.get("/profile", UserJWT_DTO, UserProfileController);
UserRouter.patch(
  "/user-data",
  UserJWT_DTO,
  UserUpdateDataDTO,
  UserUpdateDataController
);
UserRouter.patch(
  "/user-email",
  UserJWT_DTO,
  UserUpdateEmailDTO,
  UserUpdateEmailController
);
UserRouter.patch(
  "/user-password",
  UserJWT_DTO,
  UserUpdatePasswordDTO,
  UserUpdatePasswordController
);
UserRouter.delete(
  "/unregister",
  UserJWT_DTO,
  UserUnregisterDTO,
  UserUnregisterController
);

export default UserRouter;
