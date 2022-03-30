import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from '../../pages/Users';
import Groups from '../../pages/Groups';
import Nav from '../../pages/Navigations/Nav';

const PagesRoute = () => (
  <div className="content">
    <Nav />
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/groups" element={<Groups />} />
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
