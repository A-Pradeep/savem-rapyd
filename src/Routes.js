import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";

export const StandardRoutes = [
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
];
