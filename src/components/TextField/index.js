// Librerías
import React, { PureComponent } from "react";

// Componentes
import ToolTip from "../ToolTip";

// Estilos
import styles from "./index.module.sass";

const assign = Object.assign;

class TextField extends PureComponent {
  state = { focus: false };

  render() {
    const props = this.props;
    const state = this.state;
    const overwrite = {};
    const inputData = props.input || {};
    const toolTipContent = props.toolTipContent;
    const propsInput = inputData.input || inputData || {};
    const focus = state.focus;
    const isNewHook = !!inputData.input;

    var open = false;
    if (!focus) {
      overwrite.placeholder = "";
      open = false;
    } else open = true;
    if (propsInput.value || propsInput.defaultValue) open = true;

    const inputAttributes = assign(
      {},
      propsInput,
      {
        onFocus: (e) => {
          if (propsInput.onFocus) propsInput.onFocus(e);
          this.setState({ focus: true });
        },
        onBlur: (e) => {
          if (propsInput.onBlur) propsInput.onBlur(e);
          this.setState({ focus: false });
        },
      },
      overwrite
    );

    return (
      <div
        className={`${styles.TextFieldRoot} ${
          (open && styles.open) || styles.close
        } ${(focus && styles.focus) || ""} ${
          (!!props.input.error && styles.error) || ""
        } ${(inputAttributes.disabled && styles.disabled) || ""} ${
          props.className || ""
        }`}
      >
        <label htmlFor={inputData.id || ""}>{props.label}</label>
        <input
          {...inputAttributes}
          value={isNewHook ? inputData.displayValue : inputAttributes.value}
          autoComplete="off"
        />
        {isNewHook && (
          <input
            className={styles.realInput}
            {...inputAttributes}
            id={inputData.id}
            name={inputData.name}
            autoComplete="off"
          />
        )}
        {!propsInput.error && !!inputAttributes.value && (
          <span className={`material-icons ${styles.checkIcon}`}>done</span>
        )}
        {!!toolTipContent && <ToolTip content={toolTipContent} />}
        {!!propsInput.error && (
          <div className={styles.errorDescription}>{propsInput.error}</div>
        )}
      </div>
    );
  }
}

export default TextField;
