import React, { useEffect, useState } from "react";
import css from "components/pet-card/petCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { Text } from "ui/text/Text";
import { useSetPet } from "hooks/hooks";
import { useNavigate } from "react-router-dom";
import { ModalForm } from "components/modal-form/ModalForm";

type PetProps = {
  name: string;
  image: string;
  location: string;
  id: number;
  userId?: number;
  found_it?: boolean;
};

function PetCard({ name, image, id, location, userId, found_it }: PetProps) {
  const navigate = useNavigate();
  const [pet, setPet] = useSetPet();
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setPet({
      ...pet,
      petName: name,
      petImgURL: image,
      petId: id,
      petLocation: location,
      userId,
    });
    navigate("/reported-pets");
  }

  function handleShowModalForm() {
    showModal == false ? setShowModal(true) : setShowModal(false);
  }

  function ReportPetComp() {
    return (
      <a
        onClick={handleShowModalForm}
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

  function checkStatusPet() {
    if (userId) {
      return <EditPetComp />;
    } else if (found_it) {
      return (
        <Text tag="title" fsize="1rem" whiteSpace={"nowrap"}>
          Encontrado
        </Text>
      );
    } else {
      return <ReportPetComp />;
    }
  }

  return (
    //Si found_it es true me agrega la clase root, un espacio vacio para separa las clases y la clase con el modificador correspondiente al condiconal aplicado.
    <article
      className={
        found_it == true
          ? `${css.root} , ${css["root__shadow-green"]}`
          : css.root
      }
    >
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
          <Text tag="title" fsize="2rem" whiteSpace={"nowrap"}>
            {name}
          </Text>
          <Text tag="text-bold" whiteSpace={"nowrap"}>
            {location}
          </Text>
        </div>
        <div className={css.report__container}>{checkStatusPet()}</div>
      </div>
      {showModal ? (
        <ModalForm
          id={id}
          name={name}
          closeModal={(modal) => {
            if (modal == true) {
              setShowModal(false);
            }
          }}
        />
      ) : null}
    </article>
  );
}

export { PetCard };
