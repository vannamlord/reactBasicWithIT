import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponents from "./AddComponent";
class MyComponent extends React.Component {
    state = {
        arrjobs: [
            { id: 'job1', title: 'devops', salary: '500' },
            { id: 'job2', title: 'BA', salary: '600' },
            { id: 'job3', title: 'Fullstack', salary: '800' }
        ]
    }
    addNewJob = (job) => {
        this.setState({
            arrjobs: [...this.state.arrjobs, job]
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
                <AddComponents
                    addNewJob={this.addNewJob}
                />
                <ChildComponent arrjobs={this.state.arrjobs} />
            </>
        )
    }
}

export default MyComponent;