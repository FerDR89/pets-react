import React from "react";
import css from "pages/reported-pets/index.css";
import { useNavigate } from "react-router-dom";
import { ReportForm } from "components/report-form/ReportForm";
import { usePet, useUser } from "hooks/hooks";
import { fetchUpdatePet, fetchDeletePet } from "lib/api";

import { Text } from "ui/text/Text";
import { MyButton } from "ui/my-button/MyButton";

export function ReportedPets() {
  const pet = usePet();
  const petName = pet["petName"];
  const petId = pet["petId"];
  const userId = pet["userId"];
  const user = useUser();
  const token = user["token"];
  const navigate = useNavigate();

  console.log(pet);

  function handleCancelClick() {
    navigate("/my-pets");
  }

  function handleFoundItClick() {
    if (token && petId) {
      const petData = {
        found_it: true,
        pet_id: petId,
      };
      fetchUpdatePet(token, petData).then((res) => {
        if (res.updatePet == true) {
          alert("Su mascota fue reportada con éxito");
        } else {
          alert(
            "Hubo un problema con la carga de su mascota, por favor intente más tarde"
          );
        }
      });
    }
  }

  function handleDeleteClick() {
    if (token && petId) {
      fetchDeletePet(token, petId).then((res) => {
        if (res.deletedPet == true) {
          alert("Su mascota fue eliminada con éxito");
          navigate("/my-pets");
        } else {
          alert(
            "Hubo un problema con la carga de su mascota, por favor intente más tarde"
          );
        }
      });
    }
  }

  function FoundButton() {
    return (
      <div className={css.found__button}>
        <MyButton onClicked={handleFoundItClick} bgc={"var(--btn-bg2)"}>
          <Text tag="text-bold" fsize="16px">
            Reportar como encontrado
          </Text>
        </MyButton>
        <a onClick={handleDeleteClick} className={css.link}>
          DESPUBLICAR
        </a>
      </div>
    );
  }

  function CancelButton() {
    return (
      <MyButton onClicked={handleCancelClick} bgc={"var(--btn-bg3)"}>
        <Text tag="text-bold" fsize="16px">
          Cancelar
        </Text>
      </MyButton>
    );
  }

  return (
    <article className={css.root}>
      {userId == null ? (
        <Text tag="title">Reportar mascota perdida</Text>
      ) : (
        <Text tag="title">Editar mascota perdida</Text>
      )}
      {userId == null ? <ReportForm /> : <ReportForm petName={petName} />}
      {petName ? <FoundButton /> : <CancelButton />}
    </article>
  );
}
