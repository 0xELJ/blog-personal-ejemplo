import React, { Component } from "react";
import { url, firstLink, imgStyles } from "../styles";
import getLink from "../styles";
import Logo from "./Logo";
export default class Navbar extends Component {
  // getSpanStyles() {
  //   return { fontWeight: "bold", fontSize: "32px" };
  // }

  render() {
    return (  
      <div>
        {/* HTML <img 
          src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png" 
          alt="Logo" 
          style="width: 40px;"
        > */}
        {/* JSX <img /> */}
        {/* <img 
          src={url} 
          alt="Logo" 
          // style="width: 40px;"
          style={imgStyles}
        /> */}

        {/* <span style="font-weight: bold; font-size: 32px;">Blog</span> */}
        {/* <span style={this.getSpanStyles()}>{5 > 8 ? "Blog" : "Web"}</span> */}

        <Logo />

        {/* <nav class="navbar"> */}
        <nav className="navbar">
          <ul>
            <li>{firstLink}</li>
            <li>Acerca</li>
            <li>Publicaciones</li>
            <li>Contacto</li>
            {/* <li>{greeting()}</li> */}
            <li>{getLink()}</li>
          </ul>
        </nav>
      </div>
    );
  }
}