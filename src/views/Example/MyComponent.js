import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponents from "./AddComponent";
import Nav from "../Nav/Nav";
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
    deleteAJob = (job) => {
        this.setState({
            arrjobs: this.state.arrjobs.filter(item => item.id !== job.id)
        })
    }
    componentDidMount() {
        console.log('>>>Check componentdidmount')
    }
    render() {
        return (
            <>
                <AddComponents
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrjobs={this.state.arrjobs}
                    deleteAJob={this.deleteAJob}
                />
                {/* <Nav /> */}
            </>
        )
    }
}

export default MyComponent;