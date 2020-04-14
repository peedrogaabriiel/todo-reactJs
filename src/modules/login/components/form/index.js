import React, { useState, useEffect } from "react";
import "./styles.css";
import ModalComponent from "../modal";
import { connect } from "react-redux";
import routesNames from "../../../../router/routes-names";
import NavigationService from "../../../../services/navigation-service";
import { Creators as userAuthCreators } from "../../../../ducks/user-auth";

const Form = ({ setAuthenticated, authenticated }) => {
  useEffect(() => {
    if (authenticated) {
      NavigationService.push(routesNames.dragon);
    } else {
      NavigationService.push(routesNames.login);
    }
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);

  const submit = e => {
    if (email === "pedro.daltoe86@gmail.com" && password === "123456") {
      setAuthenticated(true);
      localStorage.setItem("authenticated", true);
      NavigationService.push(routesNames.dragon);
    } else {
      setVisible(true);
      e.preventDefault();
    }
  };

  const onChangeEmail = event => {
    setEmail(event.target.value);
  };

  const onChangePassword = event => {
    setPassword(event.target.value);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const seeList = () => {
    localStorage.removeItem("authenticated");
    NavigationService.push(routesNames.dragon);
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
            <button onClick={seeList} className="btn btn-primary">
              Ver lista de dragões
            </button>
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </div>
        </form>
      </div>
      <ModalComponent
        visibleModal={visible}
        closeModal={closeModal}
        onClickBackdrop={closeModal}
      />
    </div>
  );
};

const mapStateToProps = ({ userAuth }) => ({
  authenticated: userAuth.authenticated
});

const mapDispatchToProps = {
  setAuthenticated: userAuthCreators.setAuthenticated
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
