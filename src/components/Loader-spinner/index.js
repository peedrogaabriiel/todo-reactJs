import React from "react";
import Loader from "react-loader-spinner";
import "./styles.css";

const LoaderSpinner = () => {
  return (
    <div className="create-spinner">
      <Loader type="TailSpin" color="#69be41" height={100} width={100} />
    </div>
  );
};

export default LoaderSpinner;
