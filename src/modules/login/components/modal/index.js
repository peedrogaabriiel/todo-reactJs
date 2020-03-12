import React from "react";
import Modal from "react-bootstrap4-modal";
import { Link } from "react-router-dom";

const ModalComponent = ({ visibleModal, onClickBackdrop, closeModal }) => {
  return (
    <Modal visible={visibleModal} onClickBackdrop={onClickBackdrop}>
      <div className="modal-header">
        <h5 className="modal-title">Credenciais inválidas</h5>
      </div>
      <div className="modal-body">
        <p>Verifique seu e-mail e senha e tente novamente</p>
        <p>Você também pode acessar a lista sem estar logado!</p>
      </div>
      <div className="modal-footer">
        <Link to="/dragon" className="btn btn-primary">
          Acessar a lista
        </Link>
        <button type="button" className="btn btn-primary" onClick={closeModal}>
          Tentar novamente
        </button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
