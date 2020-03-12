import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Dragon = ({ id, name, type }) => {
  const deleteDragon = () => alert("dragão deletado com sucesso");

  const nameAndLastName = name => {
    const names = name.split(" ");
    if (names[0].length >= 22 || names[1] ? names[1].length >= 22 : null) {
      return names.shift();
    } else {
      return names.length > 1
        ? `${names.shift()} ${names.pop()}`
        : names.shift();
    }
  };

  return (
    <div className="dragon-list">
      <article>
        <div>
          <strong>Nome: {nameAndLastName(name)}</strong>
          <p>Tipo: {type}</p>
        </div>
        <Link to={`/dragon/${id}`}>Ver Detalhes</Link>
        <button onClick={deleteDragon} className="delete" to={`/dragon/${id}`}>
          Excluir
        </button>
      </article>
    </div>
  );
};

export default Dragon;
