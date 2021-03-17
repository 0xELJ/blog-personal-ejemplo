import React, { Component } from "react";
import Post from "./Post";

export default class PostList extends Component {
  firstGreeting() {
    alert("Leer más desde Encabezado 1");
    // Poner lógica del evento
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">Publicaciones</h2>
        <Post 
          title="Encabezado 1" 
          content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
          onPress={this.firstGreeting}
        />
        <Post
          title="Encabezado 2" 
          content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
          onPress={function () { alert("Leer más desde Encabezado 2") }}
        />
        <Post
          title="Encabezado 3" 
          content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." 
          onPress={function () { alert("Leer más desde Encabezado 3") }}
        />
        <Post
          title="Encabezado 4" 
          content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." 
          onPress={function () { alert("Leer más desde Encabezado 4") }}
        />
      </div>
    );
  }
}