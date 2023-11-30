import logo from "./assets/logo.png";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { About } from "./about/About";
import { Services } from "./services/Services";
import { Home } from "./home/Home";
import { Contact } from "./contact/Contact";
import { Instagram } from "lucide-react";

function App() {
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="logo" />
        <div className="header-container">
          <div className="title">
            <h1>Besch Bike Fit</h1>
          </div>
          {/* <img src={peaks} className="header-img" alt="peaks" /> */}
          <nav className="nav-wrapper">
            <div className="main-nav">
              <Link to="/" className="nav-btn">
                Home
              </Link>
              <Link to="/About" className="nav-btn">
                About
              </Link>
              <Link to="/Services" className="nav-btn">
                Services
              </Link>
              <Link to="/Contact" className="nav-btn">
                Contact Us
              </Link>
            </div>
            <div className="nav-socials">
              <span className="nav-social-words">Follow me:</span>
              <a
                className="instagram"
                href="https://www.instagram.com/beschbikefit/"
              >
                <Instagram />
              </a>
            </div>
          </nav>
        </div>
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
