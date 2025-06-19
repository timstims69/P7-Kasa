import React from "react";
import ReactDOM from "react-dom/client"; // Assurez-vous d'utiliser le bon import pour ReactDOM.createRoot
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home"; // Ajoutez les composants enfants
import About from "./components/About"; // Ajoutez les composants enfants
import Logo from "./components/Logo";
import Details from "./components/Details";
import logements from "./data/logements.json";
import "./index.css";
// Créer les routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Details />,
      },
    ],
  },
]);

// Créer la racine de l'application et rendre l'élément dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// ici  path: "/:id", peut etre remplacé dynamiquement
