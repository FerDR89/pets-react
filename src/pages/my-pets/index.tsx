import React, { useEffect } from "react";
import css from "pages/pets-around/index.css";
import { useMyPets } from "hooks/hooks";
import { PetCard } from "components/pet-card/PetCard";
import { Text } from "ui/text/Text";

const MyPets = () => {
  const arrayPets = useMyPets();
  return (
    <article className={css.root}>
      <div className={css.title__container}>
        <Text tag="title"> Mis mascotas reportadas</Text>
      </div>
      <div className={css.cards__container}>
        {arrayPets.length > 0 ? (
          arrayPets.map((pet) => {
            return (
              <PetCard
                key={pet.imgURL}
                name={pet.fullname}
                id={pet.id}
                image={pet.imgURL}
                location={pet.place_lost}
                userId={pet.userId}
              />
            );
          })
        ) : (
          <Text tag="text-bold" fsize="24px" textAlign="center">
            Todavía no reportaste ninguna mascota
          </Text>
        )}
      </div>
    </article>
  );
};

export { MyPets };
