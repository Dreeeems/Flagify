import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homePage";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryInfo from "./pages/countryInfo";
function App() {
  return (
    <div className="App">
      <Menu />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:country" element={<CountryInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
