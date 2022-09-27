import React from "react";
import "./Nav.scss";
import { withRouter } from "react-router";
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {
    openCreatAccout = () => {
        this.props.history.push('/creat-account')
    }
    openChangePassword = () => {
        this.props.history.push('/change-password')
    }
    openSignIn = () => {
        this.props.history.push('/sign-in')
    }
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/traceability" activeClassName="active">
                    Traceability Control
                </NavLink>
                <NavLink to="/viper" activeClassName="active">
                    Viper Control
                </NavLink>
                <NavLink to="/quattro" activeClassName="active">
                    Quattro Control
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    List User
                </NavLink>
                <NavLink to="/testing-page" activeClassName="active">
                    TestingSomeTask
                </NavLink>
            </div>
        );
    }
}
export default withRouter(Nav);
