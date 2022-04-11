import React, { useEffect, useState } from "react";
import css from "pages/home/index.css";
import { useNavigate } from "react-router-dom";
import { useSetGuessCords } from "hooks/hooks";
import { Text } from "ui/text/Text";
import { MyButton } from "ui/my-button/MyButton";

const Home = () => {
  const navigate = useNavigate();
  const [coords, setNewCoords] = useSetGuessCords();

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;
      setNewCoords({ lat, lng });
    });
    navigate("/pets-around");
  };

  return (
    <article className={css.root}>
      <Text tag="title" fsize="40px">
        Mascotas perdidas cerca tuyo
      </Text>
      <Text tag="text-body" textAlign={"center"}>
        Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
        conocer tu ubicación.
      </Text>
      <MyButton onClicked={handleClick} bgc={"var(--btn-bg1)"}>
        <Text tag="text-bold" fsize="16px">
          Dar mi ubicación
        </Text>
      </MyButton>
    </article>
  );
};

export { Home };
