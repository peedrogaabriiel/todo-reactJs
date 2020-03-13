import React from "react";
import Modal from "react-bootstrap4-modal";
import "./styles.css";
import NavigationService from "../../../../services/navigation-service";
import routesNames from "../../../../router/routes-names";

const ModalComponent = ({ visibleModal, onClickBackdrop, closeModal }) => {
  const seeList = () => {
    localStorage.removeItem("authenticated");
    NavigationService.push(routesNames.dragon);
  };

  return (
    <Modal
      className="modal"
      visible={visibleModal}
      onClickBackdrop={onClickBackdrop}
    >
      <div className="modal-header">
        <h5 className="modal-title">Credenciais inválidas</h5>
      </div>
      <div className="modal-body">
        <p>Verifique seu e-mail e senha e tente novamente</p>
        <p>Você também pode acessar a lista sem estar logado!</p>
      </div>
      <div className="modal-footer">
        <button onClick={seeList} className="btn btn-primary">
          Ver lista de dragões
        </button>
        <button type="button" className="btn btn-primary" onClick={closeModal}>
          Tentar novamente
        </button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
