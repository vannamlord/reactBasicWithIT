import React from "react";
import "../Nav/Nav.scss";
import { withRouter } from "react-router";
class TestingPage extends React.Component {
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
                <div>Hello in testing</div>
            </>

        )
    }
}
export default withRouter(TestingPage);