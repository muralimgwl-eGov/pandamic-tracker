import React, { Component } from "react";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <h2>Your QR Code</h2>
      <div className="hamburger" onClick={props.nav}>
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
      </div>
    </header>
  );
}

export default Header;
