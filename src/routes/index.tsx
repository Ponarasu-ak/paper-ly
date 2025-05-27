import {
  LandingPage,
  SignIn,
  SignUp,
  Splash,
  WelcomeUserPage,
} from "../modules/container";

export const app_routes = [
  { id: 1, path: "*", component: <Splash /> },
  {
    id: 2,
    path: "/",
    component: <LandingPage />,
  },
  {
    id: 3,
    path: "/signin",
    component: <SignIn />,
  },

  {
    id: 4,
    path: "/signup",
    component: <SignUp />,
  },
  {
    id: 5,
    path: "/welcomeuserpage",
    component: <WelcomeUserPage />,
  },
];
