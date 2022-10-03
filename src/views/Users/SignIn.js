import React from "react";
import "./SignIn.scss";
import { withRouter } from "react-router";
import {
    Link, NavLink
} from "react-router-dom";

class SignIn extends React.Component {
    render() {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label className="labelAuth">Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label className="labelAuth">Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            <NavLink to="/change-password" activeClassName="active">
                                Forgot password?
                            </NavLink>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(SignIn);