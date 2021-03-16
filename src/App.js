import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import PostList from "./components/PostList";
import Footer from "./components/Footer";

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