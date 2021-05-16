import React from "react";
import "./style.css";

function Header(props) {
    return (
        <>
            <div className="jumbotron" id="hero">
                <div className="fade-in">
                    <h4 className="display-4 text-center" id="head-shad">{props.page}</h4>
                </div>
            </div>
        </>
    )
}

export default Header;