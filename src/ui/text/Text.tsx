import React from "react";
import css from "./text.css";

type TextProps = {
  tag: string;
  children: any;
  fsize?: string;
  textAlign?: any;
  whiteSpace?: any;
};

function Text({ tag, children, fsize, textAlign, whiteSpace }: TextProps) {
  const tags =
    tag === "title" ? (
      <h1
        className={css.text__title}
        style={{ fontSize: fsize, whiteSpace: whiteSpace }}
      >
        {children}
      </h1>
    ) : tag === "text-bold" ? (
      <h3
        className={css.text__bold}
        style={{ fontSize: fsize, whiteSpace: whiteSpace }}
      >
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
