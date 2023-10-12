import React, { useState } from "react";
import "./styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";


export default function App() {
  return (
    <>
      <main
        style={{
        
          height: "100%",
          minHeight: "100vh",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Router>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/LandingPage" element={<LandingPage />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}
