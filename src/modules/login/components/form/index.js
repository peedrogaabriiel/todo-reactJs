import React, { useState } from "react";
import NavigationService from "../../../../services/navigation-service";
import routesNames from "../../../../router/routes-names";

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
    <div
      className="card bg-dark text-white"
      style={{
        background: "gray",
        flex: 1,
        height: "100%",
        justifyContent: "center"
      }}
    >
      <div
        className="divForm"
        style={{
          background: "#69be41",
          width: 600,
          height: 300,
          alignSelf: "center",
          alignContent: "center",
          borderRadius: 14
        }}
      >
        <form
          onSubmit={submit}
          className="container"
          style={{
            width: 500
          }}
        >
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

          <button type="submit" className="btn btn-primary btn-block">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
