import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Menu;
