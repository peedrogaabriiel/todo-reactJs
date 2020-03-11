import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const CreateDragonButton = () => {
  return (
    <div className="create-dragon-button">
      <h1>Lista de Dragões</h1>
      <Link to="/create-dragon">Criar Dragão</Link>
    </div>
  );
};

export default CreateDragonButton;
