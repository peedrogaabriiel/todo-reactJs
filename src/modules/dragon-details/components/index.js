import React from "react";
import "./styles.css";

const DragonDetailComponent = ({ name, type, createdAt, histories }) => (
  <div className="dragon-details">
    <h1>Nome: {name}</h1>
    <p>Tipo: {type}</p>
    <p>Data de criação: {createdAt}</p>
    <p>Descrição: {histories}</p>
  </div>
);

export default DragonDetailComponent;
