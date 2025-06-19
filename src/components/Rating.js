import React from "react";

function Rating({ rating }) {
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => {
        return (
          <img
            src={index + 1 <= rating ? "/activeStar.png" : "/inactiveStar.png"}
            key={index + 1}
          ></img>
        );
      })}
    </div>
  );
}

export default Rating;
//{Array.from({ length: 5 } = fait moi une itération de 5 étapes
//Index ligne 6 ( (_, index) ) c'est la position de l'itération, _ ça veut dire any
//  src={index + 1 <= rating ? "/activeStar.png" : "/inactiveStar.png"}
// si index (+ 1 car l'array commence a 0 ) est inferieur ou égal "rating" (qui est juste un parametre)

//<Rating rating={logement.rating}> </Rating>, ici le props numéro un est un PROPS, une propriété.
