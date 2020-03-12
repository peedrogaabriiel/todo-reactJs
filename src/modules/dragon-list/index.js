import React, { useEffect } from "react";
import { connect } from "react-redux";
import CreateDragonButton from "./components/create-dragon-button";
import { Creators as loadDragonCreators } from "../../ducks/load-dragons";
import { Creators as deleteDragonCreators } from "../../ducks/delete-dragon";
import Dragon from "./components/dragon";
import Loader from "../../components/Loader-spinner";

const DragonList = ({
  loading,
  listDragons,
  loadDragons,
  deleteDragonList
}) => {
  useEffect(() => {
    loadDragons();
  }, [loadDragons]);

  return loading ? (
    <Loader size={100} />
  ) : (
    <>
      <CreateDragonButton />
      {listDragons.map((item, index) => (
        <Dragon
          key={index}
          id={item.id}
          name={item.name}
          type={item.type}
          deleteDragonList={deleteDragonList}
        />
      ))}
    </>
  );
};

const mapStateToProps = ({ loadDragons }) => ({
  listDragons: loadDragons.listDragons,
  loading: loadDragons.loading
});

const mapDispatchToProps = {
  loadDragons: loadDragonCreators.loadDragons,
  deleteDragonList: deleteDragonCreators.deleteDragonList
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonList);
