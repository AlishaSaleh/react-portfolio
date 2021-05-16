import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <>
            <div className="jumbotron" id="hero">
                <div className="fade-in">
                    <h4 className="display-4 text-center" id="head-shad">Alisha Saleh</h4>
                    <img src="https://github.com/AlishaSaleh/responsivedesign/blob/main/images/face-2015.jpg?raw=true" className="rounded-circle center p-3 mx-auto d-block" id="profile-img"
                        alt="Alisha Saleh" />
                    <p className="lead text-center hero-text">Birmingham, UK</p>
                    <hr className ="col-md-4"/>
                    <p className="text-center hero-text">Full Stack Web Developer</p>
                    <br />
                    <div className="d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/alisha-saleh/"><i className="fa fa-linkedin fa-2x"></i></a>
                        <a href="https://github.com/AlishaSaleh"><i className="fa fa-github fa-2x"></i></a>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <i className="fa fa-chevron-down fa-3x"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jumbotron;