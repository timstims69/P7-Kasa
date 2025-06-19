import React from "react";
import "../css/card.css";
import { Link } from "react-router-dom";
function Card({ logement }) {
  return (
    //Insère l'id dans l'url 
    <Link to={logement.id} className="cardlink">
      <div className="card">
        <img className="cardimage" src={logement.cover} />
        <p className="card-title">{logement.title}</p>
      </div>
    </Link>
  );
}
export default Card;

// {logement} ligne trois est un objet, ensuite ligne 6 on lui demande va  me chercher logement.title,
// logement ligne trois permet de faire en sorte que le code va defiler les cases dans l'objets,
//  sans ça impossible de se déplacer
