import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'ronado',
        channel: 'hoi dan IT',
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
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
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Hello my component, My name is {this.state.name}
                </div>
                <div className="second">
                    Toi hoc reactjs tu: {this.state.channel}
                </div>
            </>
        )
    }
}

export default MyComponent;