import React from "react";
import "./styles.css";
import dayjs from "dayjs";
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
  const formatDate = dayjs(createdAt).format("DD/MM/YYYY");

  return (
    <div className="dragon-details">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1>Nome: {name}</h1>
          <p>Tipo: {type}</p>
          <p>Data de criação: {formatDate}</p>
          <p>Descrição: {histories}</p>
          <Link to={`/edit-dragon/${id}`}>Editar</Link>
        </>
      )}
    </div>
  );
};
export default DragonDetailComponent;
