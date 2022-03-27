import React from "react";
import { Outlet } from "react-router-dom";
import css from "./layout.css";
import { BurgerMenu } from "components/burger-menu/BurgerMenu";
import { MyFooter } from "components/my-footer/MyFooter";

function Layout() {
  return (
    <section className={css.root}>
      <header className={css.header}>
        <BurgerMenu />
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
      <footer className={css.footer}>
        <MyFooter />
      </footer>
    </section>
  );
}

export { Layout };
