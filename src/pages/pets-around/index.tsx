import React from "react";
import css from "pages/home/index.css";
import { Text } from "ui/text/Text";
import { PetCard } from "components/pet-card";
import pet from "assets/mockPet.jpg";

const PetsAround = () => {
  return (
    <article className={css.root}>
      <PetCard name="PERROSAURIO" id={5} image={pet} location="San Martín" />

      {/* <Text tag="title" fsize="40px">
        Mascotas perdidas cerca tuyo
      </Text>
      <Text tag="text-body" textAlign={"center"}>
        Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
        conocer tu ubicación.
      </Text>
  */}
    </article>
  );
};

export { PetsAround };
