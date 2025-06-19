import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* Le contenu des routes enfants sera injecté ici */}
      <Outlet />
    </div>
  );
}

export default App;
