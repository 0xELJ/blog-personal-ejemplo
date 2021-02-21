import React, { Component } from "react";
import "./app.css";

class Navbar extends Component {
  getSpanStyles() {
    return { fontWeight: "bold", fontSize: "32px" };
  }

  render() {
    const url = "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png";
    const firstLink = "Inicio";

    return (  
      <div>
        {/* HTML <img 
          src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png" 
          alt="Logo" 
          style="width: 40px;"
        > */}
        {/* JSX <img /> */}
        <img 
          src={url} 
          alt="Logo" 
          // style="width: 40px;"
          style={{ width: "40px" }}
        />

        {/* <span style="font-weight: bold; font-size: 32px;">Blog</span> */}
        <span style={this.getSpanStyles()}>{5 > 8 ? "Blog" : "Web"}</span>

        {/* <nav class="navbar"> */}
        <nav className="navbar">
          <ul>
            <li>{firstLink}</li>
            <li>Acerca</li>
            <li>Publicaciones</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </div>
    );
  }
}

class MainSection extends Component {
  render() {
    return <div>MainSection</div>;
  }
}

class PostList extends Component {
  render() {
    return <Post />;
  }
}

class Post extends Component {
  render() {
    return <div>Post</div>;
  }
}

class Footer extends Component {
  render() {
    return <div>Footer</div>;
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainSection />
        <PostList />
        <Footer />
      </div>
    );
  }
}