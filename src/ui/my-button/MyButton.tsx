import React from "react";
import css from "./myButton.css";

type ButtonProps = {
  children: any;
  bgc: string;
  onClicked?: (any?) => any;
};

export function MyButton({ children, bgc, onClicked }: ButtonProps) {
  return (
    <div className={css.button__container} style={{ backgroundColor: bgc }}>
      <button onClick={onClicked} className={css.button}>
        {children}
      </button>
    </div>
  );
}
