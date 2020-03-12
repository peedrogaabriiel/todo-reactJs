import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./styles.css";
import CreateDragonButton from "./components/create-dragon-button";
import { Creators as loadDragonCreators } from "../../ducks/load-dragons";
import Dragon from "./components/dragon";
import Loader from "../../components/Loader-spinner";

const DragonList = ({ listDragons, loadDragons, loading }) => {
  useEffect(() => {
    loadDragons();
  }, [loadDragons]);

  return loading ? (
    <Loader size={100} />
  ) : (
    <>
      <CreateDragonButton />
      {listDragons.map((item, index) => (
        <Dragon key={index} id={item.id} name={item.name} type={item.type} />
      ))}
    </>
  );
};

const mapStateToProps = ({ loadDragons }) => ({
  listDragons: loadDragons.listDragons,
  loading: loadDragons.loading
});

const mapDispatchToProps = {
  loadDragons: loadDragonCreators.loadDragons
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonList);
