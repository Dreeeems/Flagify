import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import Menu from "./components/Menu";
import Discover from "./pages/Discover";
import Comparator from "./pages/Comparator";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/comparator" element={<Comparator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
