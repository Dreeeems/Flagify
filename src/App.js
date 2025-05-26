import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Game } from "./pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
