import React from "react";
import "./Homepage.css";
import { NavLink } from 'react-router-dom';

export default function Homepage(){
    return (
        <div className="home" id="home">
          <header>
            <img src="/logo192.png" alt="logo" className="app-logo" />
            <h1 className="title">The Promised Neverland</h1>
          </header>
          <div className="menu-container">
            <div className="menu-box">
              <NavLink to="/characters" className="link app-link">
                Characters
              </NavLink>
            </div>
            <div className="menu-box">
              <NavLink to="/locations" className="link app-link">
                Locations
              </NavLink>
            </div>
            <div className="menu-box">
              <NavLink to="/objects" className="link app-link">
                Objects
              </NavLink>
            </div>
            <div className="menu-box">
              <NavLink to="/about" className="link app-link">
                About
              </NavLink>
            </div>
          </div>
        </div>
    )
}