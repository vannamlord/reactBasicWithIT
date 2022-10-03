import React from "react";
import { withRouter } from "react-router";
import SignIn from "../Users/SignIn";
import { connect } from 'react-redux';
// import listUsers from "../Users/ListUser";
class Home extends React.Component {
    componentDidMount = () => { }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user)
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
                                    {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>x</span>
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

const mapDispactchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete })
    }
}

export default connect(mapStateToProps, mapDispactchToProps)(withRouter(Home));