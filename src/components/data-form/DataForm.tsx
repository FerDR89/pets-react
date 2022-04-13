import React from "react";
import css from "components/data-form/dataForm.css";
import { Text } from "ui/text/Text";
import { TextField } from "ui/text-field/TextField";
import { MyButton } from "ui/my-button/MyButton";

function DataForm() {
  return (
    <form className={css.form}>
      <TextField
        inputType="text"
        inputName="name"
        labelText="Nombre"
        holder="Tu nombre"
        fieldSetHeight="90px"
      />

      <TextField
        inputType="password"
        inputName="password"
        labelText="Contraseña"
        holder="Tu contraseña"
        fieldSetHeight="90px"
      />

      <TextField
        inputType="password"
        inputName="newPassword"
        labelText="Repetir contraseña"
        fieldSetHeight="90px"
      />

      <MyButton bgc={"var(--btn-bg1)"}>
        <Text tag="text-bold" fsize="16px">
          Guardar
        </Text>
      </MyButton>
    </form>
  );
}

export { DataForm };
