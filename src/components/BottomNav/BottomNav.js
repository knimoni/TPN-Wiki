import React from 'react';
import { NavLink } from "react-router-dom";
import { GiCharacter, GiAutoRepair, GiField } from "react-icons/gi";
import { ImHome3, ImProfile } from 'react-icons/im'
import './BottomNav.css'

export default function BottomNav() {
    return (
      <div className="bottom-nav">
        <NavLink to="/" className="link nav-link">
          <ImHome3 className="icon" />
          Home
        </NavLink>
        <NavLink to="/characters" className="link nav-link">
          <GiCharacter className="icon" />
          Characters
        </NavLink>
        <NavLink to="/locations" className="link nav-link">
          <GiField className="icon" />
          Locations
        </NavLink>
        <NavLink to="/objects" className="link nav-link">
          <GiAutoRepair className="icon" />
          Objects
        </NavLink>
        <NavLink to="/about" className="link nav-link">
          <ImProfile className="icon" />
          About
        </NavLink>
      </div>
    )
  }

