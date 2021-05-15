import React from "react";
import "./style.css";

function Card({ title, desc, app, repo, img, alt}) {
    return (
        <>
            <div className="col-md-4">
                <div className="card bg-secondary mb-4">
                    <div className="card-body">
                        <h3 className="card-title text-white">{title}</h3>
                        <img className="card-img-top mb-2" src={img}
                            alt={alt} />
                        <p className="card-text">{desc} </p>
                        <a href={app} className="btn btn-dark">Deployed
                                link</a>
                        <a href={repo} className="btn btn-dark">Repo
                                link</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;