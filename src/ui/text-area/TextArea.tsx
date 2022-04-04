import React from "react";
import css from "ui/text-area/textArea.css";
type Props = {
  labelText: string;
  inputName: string;
  fieldSetHeight?: string;
};

export function TextArea(props: Props) {
  const { labelText, inputName, fieldSetHeight } = props;
  return (
    <fieldset
      className={css["text-field__container"]}
      style={{ height: fieldSetHeight }}
    >
      <label htmlFor={inputName} className={css["text-field__label"]}>
        {labelText}
      </label>
      <textarea
        className={css["text-field__input"]}
        name={inputName}
        id={inputName}
        placeholder={labelText}
      ></textarea>
    </fieldset>
  );
}
