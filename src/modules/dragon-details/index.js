import React, { useEffect } from "react";
import DragonDetailComponent from "./components";
import { Creators as dragonIdCreators } from "../../ducks/dragon-id";
import { connect } from "react-redux";

const DragonDetail = ({ dragon, id, loading, loadIdDragon, ...props }) => {
  useEffect(() => {
    loadIdDragon(props.match.params.id);
  }, []);

  return (
    <DragonDetailComponent
      id={dragon.id}
      loading={loading}
      name={dragon.name}
      type={dragon.type}
      createdAt={dragon.createdAt}
      histories={dragon.histories}
    />
  );
};

const mapStateToProps = ({ loadIdDragon }) => ({
  dragon: loadIdDragon.dragon,
  loading: loadIdDragon.loading
});

const mapDispatchToProps = {
  loadIdDragon: dragonIdCreators.loadIdDragon
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonDetail);
