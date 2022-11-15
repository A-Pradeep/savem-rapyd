import ErrorPage from "./screens/error-page";
import LoginScreen from "./screens/login";

export const StandardRoutes = [
  {
    path: "/",
    element: <LoginScreen />,
    errorElement: <ErrorPage />,
  },
];
