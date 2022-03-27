import React from "react";
import css from "pages/home/index.css";
import { Text } from "ui/text/Text";
import { MyButton } from "ui/my-button/MyButton";

const Home = () => {
  return (
    <article className={css.root}>
      <Text tag="title" fsize="40px">
        Mascotas perdidas cerca tuyo
      </Text>
      <Text tag="text-body" textAlign={"center"}>
        Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
        conocer tu ubicación.
      </Text>
      <MyButton bgc={"var(--btn-bg1)"}>
        <Text tag="text-bold" fsize="16px">
          Dar mi ubicación
        </Text>
      </MyButton>
    </article>
  );
};

export { Home };
