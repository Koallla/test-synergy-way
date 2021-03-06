import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "../pages/Users";
import Groups from "../pages/Groups";
import Nav from "./Navigations/Nav";

const PagesRoute = () => (
  <div className="container">
    <Nav />
    <Routes>
      <Route path="/users" exact element={<Users />} />
      <Route path="/groups" exact element={<Groups />} />
    </Routes>
  </div>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PagesRoute />
      </BrowserRouter>
    );
  }
}

export default App;
