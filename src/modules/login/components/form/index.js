import React, { useState } from "react";
import NavigationService from "../../../../services/navigation-service";
import routesNames from "../../../../router/routes-names";
import "./styles.css";
import { Link } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (email === "pedro.daltoe@cwi.com" && password === "123456") {
      NavigationService.push(routesNames.dragon);
    } else {
      alert("Credenciais inválidas");
    }
  };

  const onChangeEmail = event => {
    setEmail(event.target.value);
  };

  const onChangePassword = event => {
    setPassword(event.target.value);
  };

  return (
    <div className="card">
      <div className="div">
        <form onSubmit={submit} className="container">
          <h3>Login</h3>

          <div className="form-group">
            <label>E-mail</label>
            <input
              onChange={onChangeEmail}
              value={email}
              type="email"
              className="form-control"
              placeholder="Insira seu e-mail"
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              onChange={onChangePassword}
              value={password}
              type="password"
              className="form-control"
              placeholder="Insira sua senha"
            />
          </div>
          <div className="div-buttons">
            <Link to="/dragon" className="btn btn-primary">
              Ver lista de dragões
            </Link>
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
