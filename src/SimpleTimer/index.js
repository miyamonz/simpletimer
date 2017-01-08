import React from "react"
import store from "store"
import moment from "moment"
import Clock from "./clock.js"
import InputTime from "./inputTime.js"

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: props.tasks
        }
        this.tick()
        this.tick = this.tick.bind(this)
    }
    tick(){
        let calcTasks = Object.assign([],this.props.tasks);
        calcTasks.reduce((prev,t,i) => {
            t.start = (i === 0) ? moment() : prev.end;
            t.end   = moment(t.start).add(t.time, 'm')
            return t;
        }, moment())
        this.setState({
            tasks: calcTasks
        })
    }
    render() {
        return (
            <div>
                <Clock onTick={this.tick}/>
                <table>
                <tbody>
                <tr>
                <td>task</td>
                <td>time</td>
                <td>start</td>
                <td>end</td>
                <td>graph</td>
                </tr>
                {this.state.tasks.map( (t,i) => (
                    <tr>
                        <td>{t.name}</td>
                        <td>
                            <InputTime number={t.time} 
                                onChange={ e => {t.time=e; this.tick(); }}
                            />
                        </td>
                        <td>{t.start.format("HH:mm")}</td>
                        <td>{t.end.format("HH:mm")}</td>
                        <td>
                        <div style={{border: "1px",position:"absolute"}}>
                            <div style={{
                                background: "#eae",
                                position: "relative",
                                top: 0,
                                left: t.start.diff(moment(), "m"),
                                width: t.time
                            }}> {"_"} </div>
                            </div>
                            <div style= {{
                                background: "#f00",
                                position: "relative",
                                top: "-5px",
                                left: 0,
                                height: "100%",
                                width: "2",
                            }} >{"　"}</div>
                        </td>
                        </tr>
                ))}
                </tbody>
                </table>
                </div>
        )
    }
}
