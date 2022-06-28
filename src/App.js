import React from "react";
import Row from "./Row";
import "./App.css";
import { netflix_data } from "./constants";
import Banner from "./Banner.js";
import Nav from "./Nav.js";
const App = () => {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {netflix_data.map((item) => {
        let { title, fetchURL, isLargeRow = false } = item;
        return (
          <Row title={title} fetchURL={fetchURL} isLargeRow={isLargeRow} />
        );
      })}
    </div>
  );
};

export default App;
