import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const CreateDragonButton = ({ authenticated }) => {
  return (
    <div className="create-dragon-button">
      <h1>Lista de Dragões</h1>
      {authenticated ? (
        <Link to="/create-dragon">Criar Dragão</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default CreateDragonButton;
