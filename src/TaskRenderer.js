import React from "react"
import InputTime from "./SimpleTimer/inputTime.js"


export default class extends React.Component {
    constructor(props){
        super(props)
    }
    render() {

        let TaskName = ({name}) => <span>{name}</span>;
        let TaskTime = ({time}) => 
            <InputTime number={time} onChange={(n) => this.props.onChange(n)} />;
        let TaskEst = ({time})  => <span>{time.format("HH:mm")}</span>;
        let TaskGraph = ({t}) => (
            <div style={{position: "absolute"}}>
                <div style={{position: "relative"}}></div>
                </div>
        )

        return (
            <tr>
                <td><TaskName name={this.props.task.name} /></td>
                <td><TaskTime time={this.props.task.time} /></td>
                <td><TaskEst  time={this.props.task.startEst} /></td>
                <td><TaskEst  time={this.props.task.endEst} /></td>
            </tr>
        )
    }
}
