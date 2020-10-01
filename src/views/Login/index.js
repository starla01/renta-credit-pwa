//Librerías
import React from "react";
import { useHistory } from "react-router-dom";

//Componentes
import { Button } from "../../components/Button";
import Logo from "../../components/Logo";

//Estilos
import "./index.sass";

export default function Login() {
  const history = useHistory();
  function handleRegisterTenant() {
    history.replace("/tenant");
  }
  return (
    <>
      <div className="welcomeMessage">¡Hola (Agente)!</div>
      <div className="login">
        <Logo />
        <Button type="active" onClick={handleRegisterTenant}>
          Conoce a tu inquilino
        </Button>
        <Button type="active">Cobra tu renta</Button>
        <Button type="active">Renta seguro</Button>
        <Button type="active">Préstamos</Button>
      </div>
    </>
  );
}
