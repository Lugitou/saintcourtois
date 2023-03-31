import React from "react";

function Logo() {
  return <div className={"logo"}>
    <img className={"svgLogo"} src={require("../../assets/Logo.svg").default} alt={"Logo"}/>
  </div>;
}

export default Logo;