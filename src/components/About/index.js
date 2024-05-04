import React from "react";
import "./style.css";

function AboutMe() {
    return (
        <>
        <div className="container text-white mt-5" id="about-me">
            <div className="row">
                <div className="col-sm-8 bg-secondary p-3 rounded">
                    <h1>About Me</h1>

                    <p className="p-3">
                        I'm a 28 year-old professional with a passion for all things digital and visual.
                        I graduated with a degree in History from the University of Birmingham in 2017 during which I
                        spent a year at the University of Malta. <br/><br/>

                        I currently work in the heritage sector and I'm keen to explore ways of engaging a wider range of audiences 
                        with heritage using digital tools and outreach. 
                       <br/><br/>

                        For this reason I decided to return to the University of Birmingham for the Full Stack Web
                        Development
                        course.
                        I am currently developing a strong portfolio of web projects, some of which have been
                        included on my portfolio
                        page! <br/><br/>

                        // <a id="cv-ref" href="https://docs.google.com/document/d/10GrT73-yBTW7Vf25WNqfnIDImRAYSESd7MNeAWs63_g/edit?usp=sharing">Click here to view my CV!</a>

                    </p>

                </div>
            </div>
        </div>
        </>
    )
}

export default AboutMe;
