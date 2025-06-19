import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Main from "./Main";
import logements from "../data/logements.json";
import Footer from "./Footer";
import "../css/footer.css";
function Home() {
  return (
    <>
      <div>
        <Header />
        <Main />
        <h2>Bienvenue sur la page d'accueil !{logements[0].title} </h2>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
