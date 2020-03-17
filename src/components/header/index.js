import React from "react";
import "./styles.css";
import NavigationService from "../../services/navigation-service";
import routesNames from "../../router/routes-names";

const Header = () => {
  const logout = () => {
    localStorage.removeItem("authenticated");
    NavigationService.push(routesNames.login);
    window.location.reload();
    NavigationService.push(routesNames.login);
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="span">Dragons School</span>
      <div className="div-inline my-2 my-lg-0">
        <button className="button" onClick={logout}>
          Sair
        </button>
      </div>
    </nav>
  );
};

export default Header;
