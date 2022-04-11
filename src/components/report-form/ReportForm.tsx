import React from "react";
import css from "components/report-form/reportForm.css";
import { Text } from "ui/text/Text";
import { TextField } from "ui/text-field/TextField";
import { Dropzone } from "components/dropzone/Dropzone";
import { Mapbox } from "components/mapbox/Mapbox";
import { MyButton } from "ui/my-button/MyButton";

export function ReportForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField
        inputType="text"
        inputName="name"
        labelText="Nombre"
        holder="Ingresá el nombre de tu mascota aquí"
      />
      <Dropzone />
      <Mapbox />
      <MyButton onClicked={() => {}} bgc={"var(--btn-bg1)"}>
        <Text tag="text-bold" fsize="16px">
          Reportar como perdido
        </Text>
      </MyButton>
    </form>
  );
}
