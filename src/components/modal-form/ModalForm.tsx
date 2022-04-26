import React, { useEffect } from "react";
import css from "components/modal-form/modalForm.css";
import { Text } from "ui/text/Text";
import { TextArea } from "ui/text-area/TextArea";
import { TextField } from "ui/text-field/TextField";
import { MyButton } from "ui/my-button/MyButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { fetchGuessData } from "lib/api";

type PetProps = {
  id: number;
  name: string;
  closeModal?: (any) => any;
};

function ModalForm({ id, name, closeModal }: PetProps) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const guessData = {
      guessName: e.target.name.value,
      guessPhone: e.target.tel.value,
      guessReportPet: e.target.tarea.value,
      pet_id: id,
    };
    if (guessData) {
      fetchGuessData(guessData).then((res) => {
        if (res.reported == true) {
          e.target.reset();
          alert("Su solicitud se ha procesado con éxito");
          handleSubmit ? closeModal(true) : null;
        }
      });
    }
  };

  return (
    <article className={css.root}>
      <FontAwesomeIcon
        onClick={() => {
          closeModal(true);
        }}
        icon={faXmark}
        className={css.icon}
      />
      <div className={css.title__container}>
        <Text tag="title" fsize="2rem">
          Reportar info de {name}
        </Text>
      </div>
      <form onSubmit={handleSubmit} className={css.form}>
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
