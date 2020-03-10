import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (email === "pedro" && password === "pedro") {
      alert("ok");
    } else {
      alert("tente novamente");
    }
  };

  const onChangeEmail = () => {
    setEmail({ email: email });
  };
  return (
    <div
      className="card bg-dark text-white"
      style={{
        background: "gray",
        height: 1000
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
  );
};

export default Login;
