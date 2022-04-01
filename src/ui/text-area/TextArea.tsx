import React from "react";
import css from "ui/text-area/textArea.css";
type Props = {
  inputType: string;
  labelText: string;
  inputName: string;
};

export function TextArea(props: Props) {
  const { inputType, labelText, inputName } = props;
  return (
    <fieldset className={css["text-field__container"]}>
      <label htmlFor={inputName} className={css["text-field__label"]}>
        {labelText}
      </label>
      <input
        type={inputType}
        name={inputName}
        id={inputName}
        className={css["text-field__input"]}
        autoFocus
      />
    </fieldset>
  );
}
