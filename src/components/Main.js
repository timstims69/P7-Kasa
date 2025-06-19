import React from "react";
import Card from "./Card";
import Banner from "./Banner";
import CardContainer from "./CardContainer";
import data from "../data/logements.json";

function Main() {
  return (
    <main>
      <Banner />
      <CardContainer>
        {data.map((horloge) => (
          <Card key={horloge.id} logement={horloge} />
        ))}

        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </CardContainer>
    </main>
  );
}

export default Main;
