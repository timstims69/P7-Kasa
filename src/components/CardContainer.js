import React from "react";
import "../css/card.css";
import Card from "./Card";

function CardContainer({ children }) {
  return <div className="cardcontainer">{children}</div>;
}

export default CardContainer;
