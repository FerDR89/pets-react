import React from "react";
import css from "components/pet-card/petCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons";
import { Text } from "ui/text/Text";

type PetProps = {
  name: string;
  image: string;
  location: string;
  id: number;
  edit?: boolean;
};

function PetCard({ name, image, id, location, edit }: PetProps) {
  const handleClick = () => {
    console.log("HOLA");
  };

  function ReportPetComp() {
    return (
      <a
        onClick={handleClick}
        className={css.report__link}
        aria-label="Botón para reportar una mascota perdida"
      >
        REPORTAR INFORMACIÓN
      </a>
    );
  }

  function EditPetComp() {
    return (
      <a
        onClick={handleClick}
        className={css.edit__link}
        aria-label="Botón para editar tu mascota"
      >
        <FontAwesomeIcon
          icon={faPencil}
          style={{
            width: "40px",
            height: "38px",
            color: "black",
          }}
        />
      </a>
    );
  }

  return (
    <article className={css.root}>
      <div className={css.image__container}>
        <img
          arial-label={`Imagen de la mascota perdida: ${name}`}
          src={image}
          alt={`Imagen de la mascota perdida: ${name}`}
          className={css.image}
        />
      </div>
      <div className={css.info__container}>
        <div className={css.about__container}>
          <Text tag="title" fsize="2rem">
            {name}
          </Text>
          <Text tag="text-bold">{location}</Text>
        </div>
        <div className={css.report__container}>
          {edit ? <EditPetComp /> : <ReportPetComp />}
        </div>
      </div>
    </article>
  );
}

export { PetCard };