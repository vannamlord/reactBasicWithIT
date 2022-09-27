import React from "react";
import "../Nav/Nav.scss";
import { withRouter } from "react-router";
class LogInActionForm extends React.Component {
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
            <>
                <form className="log-user-action">
                    <button className="button-sign-in" type="button"
                        onClick={() => this.openSignIn()}>
                        Sign In
                    </button><br />
                    <button className="button-creat-account" type="button"
                        onClick={() => this.openCreatAccout()}>
                        Creat Account
                    </button>
                    <button className="button-change-password" type="button"
                        onClick={() => this.openChangePassword()}>
                        Change Password
                    </button>
                </form>
            </>

        )
    }
}
export default withRouter(LogInActionForm);