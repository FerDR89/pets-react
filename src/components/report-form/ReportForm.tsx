import React from "react";
import css from "components/report-form/reportForm.css";
import { Text } from "ui/text/Text";
import { TextField } from "ui/text-field/TextField";
import { Dropzone } from "components/dropzone/Dropzone";
import { Mapbox } from "components/mapbox/Mapbox";
import { MyButton } from "ui/my-button/MyButton";

type ReportFormProps = {
  petName?: string;
};

export function ReportForm({ petName }: ReportFormProps) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("value", e.target.name.value);
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField
        inputType="text"
        inputName="name"
        labelText="Nombre"
        holder={petName || "Ingresá el nombre de tu mascota aquí"}
      />
      <Dropzone />
      <Mapbox />
      <MyButton bgc={"var(--btn-bg1)"}>
        <Text tag="text-bold" fsize="16px">
          Reportar como perdido
        </Text>
      </MyButton>
    </form>
  );
}
