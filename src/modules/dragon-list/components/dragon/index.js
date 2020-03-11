import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Dragon = ({ id, name, type }) => {
  return (
    <div className="dragon-list">
      <article>
        <div>
          <strong>Nome: {name}</strong>
          <p>Tipo: {type}</p>
        </div>
        <Link to={`/dragon/${id}`}>Ver Detalhes</Link>
      </article>
    </div>
  );
};

export default Dragon;
