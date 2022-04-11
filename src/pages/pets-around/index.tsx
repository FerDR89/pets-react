import React from "react";
import css from "pages/pets-around/index.css";
import { usePetsArounds } from "hooks/hooks";
import { PetCard } from "components/pet-card/PetCard";
import { Text } from "ui/text/Text";
import pet from "assets/mockPet.jpg";

const PetsAround = () => {
  const petsArray = usePetsArounds();
  return (
    <article className={css.root}>
      <div className={css.title__container}>
        <Text tag="title"> Mascotas perdidas cerca tuyo</Text>
      </div>
      <div className={css.cards__container}>
        {petsArray ? (
          petsArray.map((pet) => {
            return (
              <PetCard
                key={pet.imgURL}
                name={pet.fullname}
                id={pet.id}
                image={pet.imgURL}
                location={pet.place_lost}
              />
            );
          })
        ) : (
          <Text tag="text-bold">
            No encontramos mascotas perdidas cerca tuyo
          </Text>
        )}
      </div>
    </article>
  );
};

export { PetsAround };
