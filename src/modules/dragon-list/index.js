import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./styles.css";
import CreateDragonButton from "./components/create-dragon-button";
import { Creators as listDragonCreators } from "../../ducks/dragon";
import Dragon from "./components/dragon";
import Loader from "../../components/Loader-spinner";

const DragonList = ({ listDragons, loadDragons, loading }) => {
  useEffect(() => {
    loadDragons();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <CreateDragonButton />
      {listDragons.map((item, index) => (
        <Dragon key={index} id={item.id} name={item.name} type={item.type} />
      ))}
    </>
  );
};

const mapStateToProps = ({ dragonList }) => ({
  listDragons: dragonList.listDragons,
  loading: dragonList.loading
});

const mapDispatchToProps = {
  loadDragons: listDragonCreators.loadDragons
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonList);
