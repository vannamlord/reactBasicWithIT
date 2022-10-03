import React from "react";
import { withRouter } from "react-router";
import SignIn from "../Users/SignIn";
import { connect } from 'react-redux';
// import listUsers from "../Users/ListUser";
class Home extends React.Component {
    componentDidMount = () => {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    render() {
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    <SignIn />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&

                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

export default connect(mapStateToProps)(withRouter(Home));