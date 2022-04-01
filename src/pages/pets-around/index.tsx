import React from "react";
import css from "pages/pets-around/index.css";
import { PetCard } from "components/pet-card/PetCard";
import pet from "assets/mockPet.jpg";

const PetsAround = () => {
  return (
    <article className={css.root}>
      <PetCard name="PERROSAURIO" id={5} image={pet} location="San Martín" />
      <PetCard
        name="PERROSAURIO"
        id={5}
        image={pet}
        location="San Martín"
        edit={false}
      />
    </article>
  );
};

export { PetsAround };
