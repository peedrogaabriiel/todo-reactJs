import React from "react";
import "./styles.css";

const Form = () => {
  return (
    <div className="dragon-form">
      <article>
        <form onSubmit={() => alert("Feito")} className="container">
          <h3>Criar Dragão</h3>

          <div className="form-group">
            <label>Nome</label>
            <input className="form-control" placeholder="Nome do Dragão" />
          </div>

          <div className="form-group">
            <label>Tipo</label>
            <input
              className="form-control"
              placeholder="Ex: Rapido, forte, poderes especiais"
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

export default Form;
