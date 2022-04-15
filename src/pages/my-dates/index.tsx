import React from "react";
import css from "pages/my-dates/index.css";
import { Text } from "ui/text/Text";
import { DataForm } from "components/data-form/DataForm";

const MyDates = () => {
  return (
    <article className={css.root}>
      <div className={css.title__container}>
        <Text tag="title">Mis Datos</Text>
      </div>
      <DataForm />
    </article>
  );
};

export { MyDates };
