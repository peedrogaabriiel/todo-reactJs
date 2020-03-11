import React, { useState } from "react";
import "./styles.css";
import { Creators as listDragonCreators } from "../../../../ducks/dragon";
import { connect } from "react-redux";

const Form = ({ addDragon }) => {
  const submit = () => {
    const newDragon = { ...form, createDate: new Date() };
    addDragon(newDragon);
  };

  const [form, setForm] = useState("");

  const formChange = field => event => {
    switch (field) {
      case "name":
        console.log("field name", field);
        setForm({ ...form, name: event.target.value });
        break;
      case "tipo":
        console.log("field tipo", field);
        setForm({ ...form, tipo: event.target.value });
        break;
    }

    console.log("form doidao", form);
  };

  return (
    <div className="dragon-form">
      <article>
        <form onSubmit={submit} className="container">
          <h3>Criar Dragão</h3>

          <div className="form-group">
            <label>Nome</label>
            <input
              className="form-control"
              placeholder="Nome do Dragão"
              onChange={formChange("name")}
            />
          </div>

          <div className="form-group">
            <label>Tipo</label>
            <input
              className="form-control"
              placeholder="Ex: Rapido, forte, poderes especiais"
              onChange={formChange("tipo")}
            />
          </div>
          <div className="form-group">
            <label>Descrição</label>
            <textarea className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Salvar
          </button>
        </form>
      </article>
    </div>
  );
};

const mapDispatchToProps = {
  addDragon: listDragonCreators.addDragon
};

export default connect(null, mapDispatchToProps)(Form);
