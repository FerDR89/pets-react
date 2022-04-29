import React, { useEffect, useState } from "react";
import css from "pages/home/index.css";
import { useNavigate } from "react-router-dom";
import { useSetGuessCords, useSetUser } from "hooks/hooks";
import { Text } from "ui/text/Text";
import { MyButton } from "ui/my-button/MyButton";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useSetUser();
  const [coords, setNewCoords] = useSetGuessCords();

  (function checkLocalStorage() {
    const data = localStorage.getItem("user");
    const localData = JSON.parse(data);
    if (localData == null) {
      return;
    } else {
      setUser({
        ...user,
        token: localData["token"],
        userEmail: localData["userEmail"],
        userName: localData["userName"],
      });
    }
  })();

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
