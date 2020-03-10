import React, { useEffect } from "react";
import { connect } from "react-redux";

const DragonList = list => {
  useEffect(() => {
    console.log("list", list);
  }, []);

  return (
    <div style={{ height: 100, justifyContent: "space-between" }}>
      <h2 style={{ color: "blue" }}>Lista</h2>;
      <h2 style={{ color: "red" }}>Lista</h2>;<input name="dasdsa"></input>
    </div>
  );
};

const mapStateToProps = ({ dragonList }) => ({
  list: dragonList.list
});

export default connect(mapStateToProps)(DragonList);
