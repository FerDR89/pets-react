import React from "react";
import css from "pages/login/index.css";
import { Text } from "ui/text/Text";
import { EmailForm } from "components/loggin-form/EmailForm";

const Login = () => {
  return (
    <article className={css.root}>
      <div className={css.title__container}>
        <Text tag="title">Ingresar</Text>
      </div>
      <EmailForm />
    </article>
  );
};

export { Login };
