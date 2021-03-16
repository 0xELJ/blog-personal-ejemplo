import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <h1>{this.props.title}</h1>
        <p>
          {this.props.content}
        </p>
        <button onClick={this.props.onPress}>Leer más</button>
      </div>
    );
  }
}