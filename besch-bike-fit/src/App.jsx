import logo from "./assets/logo.png";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Services } from "./Services";
import { Home } from "./Home";
import { Contact } from "./Contact";

function App() {
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="logo" />
        <nav className="nav-bar">
          <Link to="/" className="nav-btn">
            Home
          </Link>
          <Link to="/About" className="nav-btn">
            About
          </Link>
          <Link to="/Services" className="nav-btn">Services</Link>
          <Link to="/Contact" className="nav-btn">Contact Us</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
