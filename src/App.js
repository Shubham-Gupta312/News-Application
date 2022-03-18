import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Function from "./Components/Function";
import Buisness from "./Components/Buisness";
import Entertainment from "./Components/Entertainment";
import Health from "./Components/Health";
import Science from "./Components/Science";
import Sports from "./Components/Sports";
import Technology from "./Components/Technology";
import Navbar from "./Components/Navbar";

export default class App extends Component {
  render() {
    return (
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Function/>}/>
            <Route path="/business" element={<Buisness/>}/>
            <Route path="/entertainment" element={<Entertainment/>}/>
            <Route path="/health" element={<Health/>}/>
            <Route path="/science" element={<Science/>}/>
            <Route path="/sports" element={<Sports/>}/>
            <Route path="/technology" element={<Technology/>}/>
          </Routes>
        </Router>
      
    );
  }
}
