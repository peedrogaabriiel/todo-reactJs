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
  authenticated,
  deleteDragonList
}) => {
  useEffect(() => {
    loadDragons();
  }, [loadDragons]);

  return loading ? (
    <Loader size={100} />
  ) : (
    <>
      <CreateDragonButton authenticated={authenticated} />
      {listDragons.map((item, index) => (
        <Dragon
          key={index}
          id={item.id}
          name={item.name}
          type={item.type}
          authenticated={authenticated}
          deleteDragonList={deleteDragonList}
        />
      ))}
    </>
  );
};

const mapStateToProps = ({ loadDragons, userAuth }) => ({
  loading: loadDragons.loading,
  listDragons: loadDragons.listDragons,
  authenticated: userAuth.authenticated
});

const mapDispatchToProps = {
  loadDragons: loadDragonCreators.loadDragons,
  deleteDragonList: deleteDragonCreators.deleteDragonList
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonList);
