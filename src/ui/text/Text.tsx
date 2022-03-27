import React from "react";
import css from "./text.css";

type TextProps = {
  tag: string;
  children: any;
  fsize?: string;
  textAlign?: any;
};

function Text({ tag, children, fsize, textAlign }: TextProps) {
  const tags =
    tag === "title" ? (
      <h1 className={css.text__title} style={{ fontSize: fsize }}>
        {children}
      </h1>
    ) : tag === "text-bold" ? (
      <h3 className={css.text__bold} style={{ fontSize: fsize }}>
        {children}
      </h3>
    ) : (
      <p className={css.text__body} style={{ fontSize: fsize }}>
        {children}
      </p>
    );
  return <div style={{ textAlign }}>{tags}</div>;
}

export { Text };
