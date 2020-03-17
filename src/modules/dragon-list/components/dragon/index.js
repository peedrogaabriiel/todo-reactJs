import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Dragon = ({ authenticated, deleteDragonList, id, name, type }) => {
  const deleDragonOfList = () => {
    deleteDragonList(id);
  };

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
        <div className="div-row">
          <strong>Nome: {nameAndLastName(name)}</strong>
          <p>Tipo: {type}</p>
        </div>
        {authenticated ? (
          <div className="div-row-options">
            <Link to={`/dragon/${id}`}>Ver detalhes</Link>
            <Link to={`/edit-dragon/${id}`}>Editar dados</Link>
            <button onClick={deleDragonOfList} className="delete">
              Excluir
            </button>
          </div>
        ) : null}
      </article>
    </div>
  );
};

export default Dragon;
