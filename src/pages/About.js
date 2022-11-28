import React from "react";
import "./About.css";

function About() {
  return (
    <div className = "card" >
        <h1>About App</h1>
        <p> TPN Wiki is an app for Anime The Promised Neverland</p>
        <p> Made using React.js </p>
        <p> Using API from my own {' '}
        <a href="https://github.com/knimoni" target="_blank" rel="noreferrer">
          GitHub
        </a>{' '} and my friend's {' '}
        <a href="https://github.com/marifrazmi/tpndb1" target="_blank" rel="noreferrer">
          GitHub
        </a>{' '}
        </p>
        <h2>About Author</h2>
        <h3> Naura Sharfina Azarine</h3>
        <div className="about-nim">21120120140159</div>
        <p>Diponegoro University</p>
        <p>Faculty of Engineering</p>
        <p>Computer Engineering</p>
    <p> </p>

 </div>
);
}

export default About;