import { RegistrationRoutes } from "../modules/registration/Routes/registeration-routes";

export const Routing = {
  registration: {
    module: 'registration',
    children: RegistrationRoutes
  },
}
