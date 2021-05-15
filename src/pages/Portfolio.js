import React from "react";
import Card from "../components/Card";
import projects from "../utils/projects.json";

function Portfolio() {
    return (
        <>
            <div class="container fade-in">
                <div class="row mt-4">
                    {projects.map(project => (
                        <Card
                            title={project.title}
                            desc={project.description}
                            app={project.dep_url}
                            repo={project.git_url}
                            img={project.img}
                            alt={project.img_desc}
                            key={project._id}
                        />))}
                </div>
            </div>
        </>
    )
}

export default Portfolio;