import React from "react";
import css from "components/modal-form/modalForm.css";
import { Text } from "ui/text/Text";
import { TextArea } from "ui/text-area/TextArea";
import { TextField } from "ui/text-field/TextField";
import { MyButton } from "ui/my-button/MyButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ModalForm() {
  const handleSubmit = () => {};

  return (
    <article className={css.root}>
      <FontAwesomeIcon icon={faXmark} className={css.icon} />
      <div className={css.title__container}>
        <Text tag="title" fsize="2rem">
          Reportar info de "insertar nombre"
        </Text>
      </div>
      <form className={css.form}>
        <TextField
          inputType="text"
          inputName="tel"
          labelText="Tu teléfono"
          holder="Ingresá aquí tu teléfono"
          fieldSetHeight="90px"
        />

        <TextField
          inputType="text"
          inputName="name"
          labelText="Tu nombre"
          holder="Ingresá aquí tu nombre"
          fieldSetHeight="90px"
        />

        <TextArea
          inputName="tarea"
          labelText="¿Dónde lo viste?"
          fieldSetHeight="140px"
        />

        <MyButton bgc={"var(--btn-bg1)"}>
          <Text tag="text-bold" fsize="16px">
            Enviar
          </Text>
        </MyButton>
      </form>
    </article>
  );
}

export { ModalForm };
