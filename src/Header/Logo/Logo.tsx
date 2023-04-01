import "./Logo.scss";
import React from "react";

function Logo() {
  return <h1 className={"Logo"}>
    <img className={"svgLogo"} src={require("../../assets/Logo.svg").default} alt={"Logo"}/>
  </h1>;
}

export default Logo;