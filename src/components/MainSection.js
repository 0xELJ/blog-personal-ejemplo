import React, { Component } from "react";
import ImgMain from "../img-main.jpg";

export default class MainSection extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ width: "50%", display: "inline-block" }}>
          <h1>Encabezado</h1>
          <h3>Subtitulo</h3>
          <button>Contacto</button>
        </div>

        <div style={{ width: "50%", display: "inline-block" }}>
          <img src={ImgMain} alt="Perfil" className="main-img" />
        </div>
      </div>
    );
  }
}