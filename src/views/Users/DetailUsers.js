import React from "react";
import { withRouter } from "react-router";
import axios from "axios";

class DetailUsers extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let res = await axios(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }

    }
    handleBackButton = () => {
        this.props.history.push('/user');
    }
    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <>
                <div> Hello in Detail id:{this.props.match.params.id}</div>
                {
                    isEmptyObj === false &&
                    <>
                        <div>User Name: {user.first_name}-{user.last_name} </div>
                        <div>User Email:{user.email} </div>
                        <img src={user.avatar} />
                        <div>
                            <button type="button" onClick={() => this.handleBackButton()}>Back</button>
                        </div>

                    </>
                }
            </>

        )
    }
}

export default withRouter(DetailUsers);