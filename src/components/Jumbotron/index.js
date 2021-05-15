import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <>
            <div className="jumbotron" id="hero">
                <div className="fade-in">
                    <h4 className="display-4 text-center" id="head-shad">Alisha Saleh</h4>
                    <img src="images/face-2015.jpg" className="rounded-circle center p-3 mx-auto d-block" id="profile-img"
                        alt="Responsive image" />
                    <p className="lead text-center hero-text">Birmingham, UK</p>
                    <hr />
                    <p className="text-center hero-text">Full Stack Web Development student at the University of Birmingham</p>
                    <br />
                    <div className="d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/alisha-saleh/"><i className="fa fa-linkedin fa-2x"></i></a>
                        <a href="https://github.com/AlishaSaleh"><i className="fa fa-github fa-2x"></i></a>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <a href="#about-me"><i className="fa fa-chevron-down fa-3x"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jumbotron;