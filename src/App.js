import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import Home from "./components/Home/home";
import ErrorPage from "./components/ErrorPage/errorPage";
import Experience from "./components/Experience/experience";
import Training from "./components/Training/training";
import Portfolio from "./components/Portfolio/portfolio";
import Skills from "./components/Skills/skills";
import Interests from "./components/Interests/interests";

const App = () => {

  return (
    <Router>
        <NavBar />

      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route exact path="/experience" element={< Experience />}/>
        <Route exact path="/training" element={< Training />}/>
        <Route exact path="/portfolio" element={< Portfolio />}/>
        <Route exact path="/skills" element={< Skills />}/>
        <Route exact path="/interests" element={< Interests />}/>
        <Route exact path="*" element={< ErrorPage />}/>
      </ Routes>
    </Router>
  );
}



export default App;