// Librerias
import React, { useState } from "react";

// Estilos
import styles from "./index.module.sass";

export default function DropDown({ input, children, label }) {
  const inputData = input.input || {};
  const propsInput = inputData.input || inputData || {};
  const { id, disabled, onBlur, onFocus } = propsInput;
  const [focus, setFocus] = useState(false);

  const attributes = {
    ...propsInput,
    ...{
      onFocus: (e) => {
        if (onFocus) onFocus(e);
        setFocus(true);
      },
      onBlur: (e) => {
        if (onBlur) onBlur(e);
        setFocus(false);
      },
    },
  };

  return (
    <div
      className={`
      ${styles.DropDownRoot}
      ${(focus && styles.focus) || ""}
      ${(!!input.error && styles.error) || ""}
      ${(disabled && styles.disabled) || ""}
    `}
    >
      <label htmlFor={id || ""}>{label || ""}</label>
      <select {...attributes}>{children}</select>
      {!!attributes.value && (
        <span className={`material-icons ${styles.checkIcon}`}>done</span>
      )}
      <i className="material-icons">arrow_drop_down</i>
      {!!attributes.error && (
        <div className={styles.errorDescription}>{attributes.error}</div>
      )}
    </div>
  );
}
