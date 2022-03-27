import React, { useState } from "react";
import { useChangeNavColor } from "hooks/hooks";
import { Link } from "react-router-dom";
import css from "components/burger-menu/burgerMenu.css";
import { Text } from "ui/text/Text";
import logo from "assets/pet-icon.png";

function BurgerMenu() {
  const [status, setStatus] = useState("hamburger__close");
  const [showModal, setShowModal] = useState("hidden__modal");

  function handleClick() {
    //Forma resumida de esto status == "open" ? setStatus("close") : setStatus("open")
    setStatus(
      status == "hamburger__close" ? "hamburger__open" : "hamburger__close"
    );
    setShowModal(showModal == "show__modal" ? "hidden__modal" : "show__modal");
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
        <div
          className={css[status]}
          onClick={() => {
            handleClick();
          }}
        ></div>
        <div className={css[showModal]}>
          <ul className={css.list}>
            <li className={css.item}>
              <a
                aria-label="COMPLETAR"
                className={css.link}
                onClick={() => {
                  handleClick();
                }}
              >
                <Text tag="text-bold" fsize="1.5rem">
                  Mis datos
                </Text>
              </a>
            </li>
            <li className={css.item}>
              <a
                aria-label="COMPLETAR"
                className={css.link}
                onClick={() => {
                  handleClick();
                }}
              >
                <Text tag="text-bold" fsize="1.5rem">
                  Mis mascotas reportadas
                </Text>
              </a>
            </li>
            <li className={css.item}>
              <a
                aria-label="COMPLETAR"
                className={css.link}
                onClick={() => {
                  handleClick();
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
              Fernando@hotmail.com
            </Text>
            <a className={css.close__link} aria-label="Cerrar sesión">
              CERRAR SESIÓN
            </a>
          </div>
        </div>
      </nav>
    </article>
  );
}

export { BurgerMenu };
