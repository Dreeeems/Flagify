import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
