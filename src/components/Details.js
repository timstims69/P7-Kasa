import React from "react";
import { Link, useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Rating from "./Rating.js";
import Description from "./description.js";
import Equipement from "./Equipement.js";
import ProfileName from "./ProfileName.js";
function Details() {
  //useParams c'est une fonctionnalité react qui récupere l'id dans l'url
  const params = useParams();
  // recupere l'id dans l'url, et appelle le id, comment ai-je inséré l'id dans l'url ? Grace a  <Link to={logement.id} className="cardlink"> (Card.js, ligne 6)
  const id = params.id;
  // Filtre moi logement.json, et compare si un objet contient un id qui est le même que l'url (la const id)
  // le resulta sera une liste/Array qui contient UN objet.
  // ici (item) est un paramètre, une wildcard
  const details = logements.filter((item) => item.id === id);
  const logement = details[0];
  //cela fait que dans le reste de cette page pas besoin de preciser-
  //- quel objet du logement.json on parle
// test test
  return (
    <div>
      <img className="cardimageDetail" src={logement.cover} />
      <p className="card-title">{logement.title}</p>
      <Rating rating={logement.rating}> </Rating>
      <Description description={logement.description}>  </Description>
      <Equipement equipement={logement.equipments}></Equipement>
      <ProfileName profileName={logement.host}></ProfileName>
    </div>
  );
}

export default Details;

//  const params = useParams(); permet de récuperer les paramtres DE L'URL
// CAD tout ce qui vient apres le /

//  const id = params.id, On a récupéré l'id

// useparams Sert a changer dynamiquement l'url


// pour utiliser un props met le dans le dans le "<>" du components, a la maniere d'un src dans l'html
// aussi il faut declarer la props en paramètre de la fonction, ENTRE DES ACCOLADES ex : function Description ({description})
// Sinon il n'est pas reconnu comme un props


