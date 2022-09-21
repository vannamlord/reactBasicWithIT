import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {
        //console.log('check prop', this.props)
        let { arrjobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs: true' : 'showJobs: false'
        console.log('>>>check showJobs:', check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrjobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}$
                                        </div>
                                    )

                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }

            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let { arrjobs } = props;
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrjobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;