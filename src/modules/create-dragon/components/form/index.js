import React, { useState } from "react";
import "./styles.css";
import { Creators as createDragonCreators } from "../../../../ducks/create-dragon";
import { Creators as editDragonCreators } from "../../../../ducks/edit-dragon";

import { connect } from "react-redux";
import NavigationService from "../../../../services/navigation-service";
import routesNames from "../../../../router/routes-names";
import Loader from "../../../../components/Loader-spinner";

const Form = ({ button, dragon, label, loading, createDragon, editDragon }) => {
  const submit = e => {
    if (dragon) {
      editDragon({ ...form, id: dragon.id });
    } else {
      const newDragon = { ...form, createDate: new Date() };
      createDragon(newDragon);
    }
    NavigationService.push(routesNames.dragon);
  };

  const [form, setForm] = useState("");

  const formChange = field => event => {
    console.log("filed: ", field);
    console.log("event: ", event.target.value);
    switch (field) {
      case "name":
        setForm({ ...form, name: event.target.value });
        break;
      case "type":
        setForm({ ...form, type: event.target.value });
        break;
      case "histories":
        setForm({ ...form, histories: event.target.value });
        break;
      default:
        return;
    }
  };

  return (
    <div className="dragon-form">
      <article>
        <form onSubmit={submit} className="container">
          <h3>{label}</h3>

          <div className="form-group">
            <label>Nome</label>
            <input
              required
              defaultValue={dragon?.name}
              className="form-control"
              placeholder={"Nome do Dragão"}
              onChange={formChange("name")}
            />
          </div>

          <div className="form-group">
            <label>Tipo</label>
            <input
              required
              className="form-control"
              defaultValue={dragon?.type}
              placeholder="Ex: Rapido, forte, poderes especiais"
              onChange={formChange("type")}
            />
          </div>
          <div className="form-group">
            <label>Descrição</label>
            <textarea
              required
              defaultValue={dragon?.histories}
              onChange={formChange("histories")}
              className="form-control"
            />
          </div>

          <div className="div-button">
            <a href="/dragon" className="btn btn-primary">
              Voltar para listagem
            </a>
            {loading ? (
              <Loader size={25} />
            ) : (
              <button type="submit" className="btn btn-primary">
                {button}
              </button>
            )}
          </div>
        </form>
      </article>
    </div>
  );
};

const mapStateToProps = ({ createDragon }) => ({
  loading: createDragon.loading
});

const mapDispatchToProps = {
  editDragon: editDragonCreators.editDragon,
  createDragon: createDragonCreators.createDragon
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
