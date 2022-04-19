import React, { useState } from "react";
import { useChangeNavColor } from "hooks/hooks";
import { Link, useNavigate } from "react-router-dom";
import { useSetUser, useSetPet } from "hooks/hooks";
import css from "components/burger-menu/burgerMenu.css";
import { Text } from "ui/text/Text";
import logo from "assets/pet-icon.png";

function BurgerMenu() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("hamburger__close");
  const [showModal, setShowModal] = useState("hidden__modal");
  const [user, setUser] = useSetUser();
  const token = user["token"];
  const userEmail = user["userEmail"];
  const [pet, setPet] = useSetPet();

  function handleMenuClick() {
    //Forma resumida de esto status == "open" ? setStatus("close") : setStatus("open")
    setStatus(
      status == "hamburger__close" ? "hamburger__open" : "hamburger__close"
    );
    setShowModal(showModal == "show__modal" ? "hidden__modal" : "show__modal");
  }

  function handleLinkClick(path: string) {
    if (token) {
      navigate(path);
    } else {
      setUser({ ...user, path });
      navigate("login");
    }
  }

  function handleCloseSesionClick() {
    setUser({});
    navigate("/");
  }

  function handleResetPetStateClick() {
    setPet({
      userId: null,
    });
  }

  const navOption = useChangeNavColor();

  return (
    <article className={css.root}>
      <nav
        className={
          navOption ? `${css["nav"]} , ${css["nav-active"]} ` : css["nav"]
        }
      >
        <Link to={"/"}>
          <img
            src={logo}
            alt="Logo de la aplicación Pet Rescue"
            className={css.logo}
          />
        </Link>
        <div className={css[status]} onClick={handleMenuClick}></div>
        <div className={css[showModal]}>
          <ul className={css.list}>
            <li className={css.item}>
              <a
                aria-label="Link to my dates page"
                className={css.link}
                onClick={() => {
                  handleMenuClick();
                  handleLinkClick("/my-dates");
                }}
              >
                <Text tag="text-bold" fsize="1.5rem">
                  Mis datos
                </Text>
              </a>
            </li>
            <li className={css.item}>
              <a
                aria-label="Link to my pets page"
                className={css.link}
                onClick={() => {
                  handleMenuClick();
                  handleLinkClick("/my-pets");
                }}
              >
                <Text tag="text-bold" fsize="1.5rem">
                  Mis mascotas reportadas
                </Text>
              </a>
            </li>
            <li className={css.item}>
              <a
                aria-label="Link to reported pets page"
                className={css.link}
                onClick={() => {
                  handleMenuClick();
                  handleLinkClick("/reported-pets");
                  handleResetPetStateClick();
                }}
              >
                <Text tag="text-bold" fsize="1.5rem">
                  Reportar mascotas
                </Text>
              </a>
            </li>
          </ul>
          <div className={css["close-session__container"]}>
            <Text tag="text-body" fsize="18px">
              {userEmail || ""}
            </Text>
            <a
              aria-label="Cerrar sesión"
              className={css.close__link}
              onClick={() => {
                handleMenuClick();
                handleCloseSesionClick();
              }}
            >
              CERRAR SESIÓN
            </a>
          </div>
        </div>
      </nav>
    </article>
  );
}

export { BurgerMenu };
