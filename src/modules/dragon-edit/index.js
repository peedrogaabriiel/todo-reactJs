import React, { useEffect } from "react";
import EditDragon from "../create-dragon/components/form";
import { connect } from "react-redux";
import { Creators as dragonIdCreators } from "../../ducks/dragon-id";

const DragonEdit = ({ dragon, id, loadIdDragon, ...props }) => {
  useEffect(() => {
    loadIdDragon(props.match.params.id);
  }, []);
  return <EditDragon button="Editar" dragon={dragon} label="Editar Dragão" />;
};

const mapStateToProps = ({ loadIdDragon }) => ({
  dragon: loadIdDragon.dragon
});

const mapDispatchToProps = {
  loadIdDragon: dragonIdCreators.loadIdDragon
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonEdit);
