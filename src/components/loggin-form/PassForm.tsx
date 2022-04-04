import React from "react";
import css from "components/loggin-form/index.css";
import { Text } from "ui/text/Text";
import { TextField } from "ui/text-field/TextField";
import { MyButton } from "ui/my-button/MyButton";

function PassForm() {
  return (
    <form className={css.form}>
      <TextField
        inputType="password"
        inputName="password"
        labelText="Contraseña"
        fieldSetHeight="90px"
      />
      <MyButton bgc={"var(--btn-bg1)"}>
        <Text tag="text-bold" fsize="16px">
          Ingresar
        </Text>
      </MyButton>
      <a className={css.link}>OLVIDÉ MI CONTRASEÑA</a>
    </form>
  );
}

export { PassForm };
