import React from "react";
import css from "pages/login/index.css";
import { Text } from "ui/text/Text";
import { PassForm } from "components/loggin-form/PassForm";

const Auth = () => {
  return (
    <article className={css.root}>
      <div className={css.title__container}>
        <Text tag="title">Ingresar</Text>
      </div>
      <PassForm />
    </article>
  );
};

export { Auth };
