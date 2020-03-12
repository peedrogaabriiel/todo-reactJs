import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader-spinner";

const DragonDetailComponent = ({
  id,
  name,
  type,
  loading,
  createdAt,
  histories
}) => {
  return (
    <div className="dragon-details">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1>Nome: {name}</h1>
          <p>Tipo: {type}</p>
          <p>Data de criação: {createdAt}</p>
          <p>Descrição: {histories}</p>
          <Link to={`/edit-dragon/${id}`}>Editar</Link>
        </>
      )}
    </div>
  );
};
export default DragonDetailComponent;
