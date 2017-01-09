import React from "react"
import InputTime from "./SimpleTimer/inputTime.js"


export default class extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        let change    = this.props.onChange
        let TaskName  = ({task}) => <span>{task.name}</span>;
        let TaskTime  = ({time}) => <InputTime number={time} onChange={change}/>;
        let TaskEst   = ({time}) => <span>{time.format("HH:mm")}</span>;
        let TaskGraph = ({t}) => (
            <div style={{position: "absolute"}}>
                <div style={{position: "relative"}}></div>
                </div>
        )

        return (
            <tr>
                <td><TaskName task={this.props.task} /></td>
                <td><TaskTime time={this.props.task.time} /></td>
                <td><TaskEst  time={this.props.task.startEst} /></td>
                <td><TaskEst  time={this.props.task.endEst} /></td>
            </tr>
        )
    }
}
