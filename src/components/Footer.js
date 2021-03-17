import React, { Component } from "react";
import Logo from "./Logo";

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ width: "50%", display: "inline-block" }}>
          <Logo />
        </div>
        <div style={{ width: "50%", display: "inline-block" }}>
          <p className="text-right">Aquí van los derechos de autor de mi blog personal.</p>
        </div>
      </div>
    );
  }
}