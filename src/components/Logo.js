import React, { Component } from "react";
import { url, imgStyles } from "../styles";

export default class Logo extends Component {
  getSpanStyles() {
    return { fontWeight: "bold", fontSize: "32px" };
  }

  render() {
    return (
      <>
        <img 
          src={url} 
          alt="Logo" 
          // style="width: 40px;"
          style={imgStyles}
        />
        <span style={this.getSpanStyles()}>{5 > 8 ? "Blog" : "Web"}</span>
      </>
    );
  }
}