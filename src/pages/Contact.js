import React from "react";
import Header from "../components/Header"

function Contact() {
    return (
        <>
        <Header page="Contact" />
         <div className="container text-white mt-5 fade-in">
            <div className="row">
                <div className="col-sm-8 bg-secondary p-3 rounded">
                    <h1>Contact</h1>

                    <form>
                        <div className="form-group">
                            <label for="usersName">Name</label>
                            <input type="text" className="form-control" id="usersName" placeholder="Enter name"/>
                            <br/>
                            <label for="usersEmail">Email address</label>
                            <input type="email" className="form-control" id="usersEmail" placeholder="Enter email"/>
                            <br/>
                            <label for="usersMessage">Message</label>
                            <textarea className="form-control" id="usersMessage" placeholder="Enter message"
                                rows="3"></textarea>
                            <br/>
                            <button className="btn btn-dark" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;