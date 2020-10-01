// Librerias
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Componentes
import Login from "./views/Login";
import RegisterTenant from "./views/RegisterTenant";

//Estilos
import "./App.css";
import "./variables.css";

function App() {
  return (
    <div className="containerApp">
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            render={(props) => {
              return <Login {...props} />;
            }}
          />
          <Route
            exact
            path="/tenant"
            render={(props) => {
              return <RegisterTenant {...props} />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
