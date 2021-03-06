import React, { Component } from "react";

export default class MainSection extends Component {
  render() {
    const url = "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80";

    return (
      <div className="container">
        <div style={{ width: "50vw", display: "inline-block" }}>
          <h1>Encabezado</h1>
          <h3>Subtitulo</h3>
          <button>Contacto</button>
        </div>

        <div style={{ width: "50vw", display: "inline-block" }}>
          <img src={url} alt="Perfil" className="main-img" />
        </div>
      </div>
    );
  }
}