import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const LogIn = () => {
    return(
        <Fragment>
           <form className="loginForm">
                <div className="mb-3">
                   <label for="exampleInputEmail1" className="form-label">Email address</label>
                   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                   <label for="exampleInputPassword1" className="form-label">Password</label>
                   <input type="password" className="form-control" id="exampleInputPassword1"/>
                   <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long.
                    </div>
                </div>
                <div className="mb-3 form-check">
                   <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                   <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Enter</button>
            </form>
        </Fragment>
    );
}

export default LogIn;