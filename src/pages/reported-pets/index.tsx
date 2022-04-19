import React from "react";
import css from "pages/reported-pets/index.css";
import { ReportForm } from "components/report-form/ReportForm";
import { useNavigate } from "react-router-dom";
import { usePet } from "hooks/hooks";
import { Text } from "ui/text/Text";
import { MyButton } from "ui/my-button/MyButton";

export function ReportedPets() {
  const pet = usePet();
  const userId = pet["userId"];
  const navigate = useNavigate();
  function handleCancelClick() {
    navigate("/my-pets");
  }

  return (
    <article className={css.root}>
      {userId == null ? (
        <Text tag="title">Reportar mascota perdida</Text>
      ) : (
        <Text tag="title">Editar mascota perdida</Text>
      )}
      {userId == null ? (
        <ReportForm />
      ) : (
        <ReportForm petName={pet["petName"]} />
      )}
      <MyButton onClicked={handleCancelClick} bgc={"var(--btn-bg3)"}>
        <Text tag="text-bold" fsize="16px">
          Cancelar
        </Text>
      </MyButton>
    </article>
  );
}
