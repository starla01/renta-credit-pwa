//Librerías
import React, { useState } from "react";

//Estilos
import "./index.sass";

//Componentes
import Logo from "../../components/Logo";
import TextField from "../../components/TextField";
import { Button } from "../../components/Button";

// Utilerias
import useInput from "../../hooks/useInput";

const validateData = useInput.validateData;

export default function RegisterTenant() {
  const [showFormRegister, setshowFormRegister] = useState(false);

  function handleFormRegister() {
    setshowFormRegister(!showFormRegister);
  }
  const name = useInput({
    id: "name",
    name: "name",
    value: "",
    required: true,
    errors: {
      requiredError: "Es necesario que introduzcas tu nombre",
      defaultError: "Introduce solo letras",
    },
    placeholder: "ej. Pedro",
    validateEvent: "blur",
    regexpOverwrite: /[A-Za-zÁ-Úá-ú ]+/,
  });

  return (
    <div className="containerTenant">
      <Logo />
      {!showFormRegister && (
        <>
          <div className="containerInfo">
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipiscing, elit fames
              facilisis himenaeos sollicitudin dictum, arcu auctor quisque
              sapien etiam.{" "}
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipiscing, elit fames
              facilisis himenaeos sollicitudin dictum, arcu auctor quisque
              sapien etiam.{" "}
            </p>
            <p className="text">
              Nullam sed dictumst orci sociosqu porta vel malesuada, ante
              quisque conubia euismod cursus nam montes, sodales lectus
              curabitur nascetur cubilia semper.
            </p>
          </div>
          <Button type="active" onClick={handleFormRegister}>
            Continuar
          </Button>
        </>
      )}
      {showFormRegister && (
        <div>
          <TextField label="Nombres (s)" input={name.input} />
        </div>
      )}
    </div>
  );
}
