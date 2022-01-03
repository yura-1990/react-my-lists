import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/header.css";
import Header from "./page/header";
import Starts from "./page/starts";
import Home from "./page/home.js"
import Future from "./page/future";
import About from "./page/about";
import Docs from "./page/doc";
import Sites from "./page/sites";
import Todo from "./page/todo";
import Planes from "./page/planes";

class HideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { componet: [] };
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"             element={<Home/>} />
          <Route path="/get-started"  element={<Starts/>}/>
          <Route path="my-todo-list"  element={<Todo/>}/>
          <Route path="about"         element={<About/>}/>
          <Route path="my-sites-list" element={<Sites/>}/>
          <Route path="docs"          element={<Docs/>}/>
          <Route path="future-list"   element={<Future/>}/>
          <Route path="plan-list"     element={<Planes/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<HideShow />, document.getElementById("root"));
