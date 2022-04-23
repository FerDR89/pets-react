import React, { HTMLProps } from "react";
import css from "./myButton.css";

type ButtonProps = {
  children: any;
  bgc: string;
  onClicked?: (any?) => any;
  type?: "submit" | "reset" | "button";
};

export function MyButton({ children, bgc, onClicked, type }: ButtonProps) {
  return (
    <div className={css.button__container} style={{ backgroundColor: bgc }}>
      <button onClick={onClicked} className={css.button} type={type}>
        {children}
      </button>
    </div>
  );
}
