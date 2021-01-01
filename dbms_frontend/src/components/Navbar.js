import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  try {
    var login = document.getElementById('login').innerHTML
    console.log(login)
  } catch (error) {
    var login = "Anonymous"
    console.log(login)
  }

  if (login == "Anonymous") {

    
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/home" style={{ textDecoration: 'none' }} className="navbar-logo" onClick={closeMobileMenu}>
            AUTOMOBILE <i className="fab fa-typo3" />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/home" style={{ textDecoration: 'none' }} className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              
                <a href="/profile" style={{ textDecoration: 'none' }} className="nav-links">
                Profile
                </a>
            </li>
            <li className="nav-item">
              <a href="/login" style={{ textDecoration: 'none' }} className="nav-links" onClick={closeMobileMenu}>
                Login
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
  }else {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <a href="/home" style={{ textDecoration: 'none' }} className="navbar-logo" onClick={closeMobileMenu}>
              AUTOMOBILE <i className="fab fa-typo3" />
            </a>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a href="/home" style={{ textDecoration: 'none' }} className="nav-links" onClick={closeMobileMenu}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                
                  <a href="/profile" style={{ textDecoration: 'none' }} className="nav-links">
                  Profile
                  </a>
              </li>
              <li className="nav-item">
                <a href="/logout" style={{ textDecoration: 'none' }} className="nav-links" onClick={closeMobileMenu}>
                  Logout
                </a>
              </li>
              
            </ul>
          </div>
        </nav>
      </>
    );
  }

}

export default Navbar;
