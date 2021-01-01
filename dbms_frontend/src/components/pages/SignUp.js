import React from "react";
import "../../App.css";
// import { Button } from "../Button";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="sign-up">
      <div className="main-container">
        <div className="upper-container">
          <h3>Looking To Buy Products</h3>
          {/* <Link className="click btn--large" to="/">
            Click Here
          </Link> */}
          <a href= "http://127.0.0.1:8000/cust-register" style={{ textDecoration: 'none' }}>
            <button src="/" className="btns btn--outline btn--large mar-left">
              Register?
            </button>
          </a>
        </div>
        <div className="lower-container">
          {/* <Link to="/">
            <button src="/" className="btns btn--outline btn--large">
              Register?
            </button>
          </Link> */}
          <a href= "http://127.0.0.1:8000/login" style={{ textDecoration: 'none' }}>
            <button className="btns btn--outline btn--large">Agent?</button>
          </a>
          <a href= "http://127.0.0.1:8000/login" style={{ textDecoration: 'none' }}>
            <button className="btns btn--outline btn--large">Employee?</button>
          </a>
          <a href= "http://127.0.0.1:8000/login" style={{ textDecoration: 'none' }}>
            <button className="btns btn--outline btn--large">Supplier?</button>
          </a>
        </div>
      </div>
    </div>
  );
}
