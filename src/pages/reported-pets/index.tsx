import React from "react";
import css from "pages/reported-pets/index.css";
import { ReportForm } from "components/report-form/ReportForm";
import { useNavigate } from "react-router-dom";

import { Text } from "ui/text/Text";
import { MyButton } from "ui/my-button/MyButton";

export function ReportedPets() {
  const navigate = useNavigate();
  function handleCancelClick() {
    navigate("/my-pets");
  }
  return (
    <article className={css.root}>
      <div className={css.title__container}>
        <Text tag="title">Reportar mascota perdida</Text>
      </div>
      <ReportForm />
      <MyButton onClicked={handleCancelClick} bgc={"var(--btn-bg3)"}>
        <Text tag="text-bold" fsize="16px">
          Cancelar
        </Text>
      </MyButton>
    </article>
  );
}
