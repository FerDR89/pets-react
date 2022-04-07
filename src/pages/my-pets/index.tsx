import React from "react";
import css from "pages/pets-around/index.css";
import { PetCard } from "components/pet-card/PetCard";
import { Text } from "ui/text/Text";
import pet from "assets/mockPet.jpg";

const MyPets = () => {
  return (
    <article className={css.root}>
      <div className={css.title__container}>
        <Text tag="title"> Mascotas perdidas cerca tuyo</Text>
      </div>
      <div className={css.cards__container}>
        <PetCard
          name="PERROSAURIO"
          id={5}
          image={pet}
          location="San Martín"
          edit={true}
        />
      </div>
    </article>
  );
};

export { MyPets };
