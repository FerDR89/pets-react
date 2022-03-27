import React from "react";
import css from "./myButton.css";

type ButtonProps = {
  children: any;
  bgc: string;
};

export function MyButton({ children, bgc }: ButtonProps) {
  return (
    <div className={css.button__container} style={{ backgroundColor: bgc }}>
      <button className={css.button}>{children}</button>
    </div>
  );
}
