import React        from "react"
import store        from "store"
import moment       from "moment"
import Clock        from "./clock.js"
import InputTime    from "./inputTime.js"

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
        let calc = Object.assign([], this.state.tasks);
        calc.reduce((prev,next,i) => {
            next.estimate(prev)
            return next
        }, null)
        this.setState({
            tasks: calc
        })
    }
    render() {
        let tasks = this.state.tasks;
        let TaskName  = ({task}) => <span>{task.name}</span>;
        let TaskEst   = ({time}) => <span>{time.format("HH:mm")}</span>;
        let change = (n,t) => {
            t.time = n
            this.tick();
        }
        return (
            <div>
                <Clock />
                <table>
                <tbody>
                <tr>
                    <td>task</td>
                    <td>time</td>
                    <td>start</td>
                    <td>end</td>
                    <td>graph</td>
                </tr>
                {tasks.map( (t,i) => (
                    <tr>
                        <td><TaskName task={t} /></td>
                        <td><InputTime number={t.time} onChange={n => change(n,t)} /></td>
                        <td><TaskEst  time={t.startEst} /></td>
                        <td><TaskEst  time={t.endEst} /></td>
                    </tr>
                ))}
                </tbody>
                </table>
                </div>
        )
    }
}
