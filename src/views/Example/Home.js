import React from "react";
import { withRouter } from "react-router";
import SignIn from "../Users/SignIn";
class Home extends React.Component {
    componentDidMount = () => {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    render() {
        return (
            <>
                <SignIn />
            </>
        )
    }
}
export default withRouter(Home);