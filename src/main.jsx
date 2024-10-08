import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Team from "./pages/Team";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error10 from "./pages/Error10 ";
import ForgetPassword from "./pages/ForgetPassword";
import AuthProvider from "./Providers/AuthProvider";
import PrivateRoute from "./Routes/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error10 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/team", element: <Team /> },
      { path: "/features", element: <Features /> },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
      },
      { path: "/about", element: <About /> },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        ),
      },
      { path: "/resetPassword", element: <ForgetPassword /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
