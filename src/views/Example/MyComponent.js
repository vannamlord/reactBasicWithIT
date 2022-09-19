import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrjobs: [
            { id: 'job1', title: 'devops', salary: '$500' },
            { id: 'job2', title: 'BA', salary: '$600' },
            { id: 'job3', title: 'Fullstack', salary: '$800' }
        ]
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('read stage', this.state)
    }
    /*
        JSX: => return block 
             => Enable use javascript in html file
             => Just 1 block in htlm
             <div>somthing<div/> => yes

             <div>somthing<div/>
             <div>somthing<div/> => no

             <div>
                <div>somthing<div/>
                <div>somthing<div/>
             <div/> => yes

             <>
                <div>somthing<div/>
                <div>somthing<div/>
             </> => yes

             or can see below

    */
    render() {
        return (
            <>
                <div>
                    Hello my component
                </div>
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br /><br />
                    <input type="button" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />

                </form>
                <ChildComponent
                    name={'Nam'}
                    age={'15'}
                    address={'Ha noi'}
                    arrjobs={this.state.arrjobs}
                />
            </>
        )
    }
}

export default MyComponent;