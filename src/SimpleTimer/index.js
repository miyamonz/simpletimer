import React        from "react"
import store        from "store"
import moment       from "moment"
import Clock        from "./clock.js"
import InputTime    from "./inputTime.js"
import Task         from "../Task.js"

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }
    componentDidMount(){
        this.load()
    }
    calc(){
        let result = Object.assign([], this.state.tasks);
        result.reduce((prev,next,i) => {
            next.estimate(prev)
            return next
        }, null)
        return result;
    }
    calcSet(){
        this.setState({
            tasks: this.calc()
        })
    }

    save(){
        store.set("tasks", this.state.tasks)
    }
    load(){
        this.setState({
            tasks: store.get("tasks").map(t => {
                let n = new Task(t)
                n.setReload(() => this.calcSet())
                return n
            })
        })
    }
    render() {
        this.calc()
        let tasks = this.state.tasks;
        console.log(tasks)
        let TaskName  = ({task}) => <span>{task.name}</span>;
        let TaskTime  = ({time}) => <span>{(time) ? time.format("HH:mm") : ""}</span>;
        return (
            <div>
                <Clock />
                <p>次のタスク：
                <button>実行</button>
                </p>
                <p>
                    <button onClick={() => this.save()}>save</button>
                    <button onClick={() => this.load()}>load</button>
                </p>
                <table>
                <tbody>
                <tr>
                    <td>task</td>
                    <td>time</td>
                    <td>実際</td>
                    <td></td>
                    <td>予測</td>
                    <td></td>
                    <td>graph</td>
                </tr>
                {tasks.map( (t,i) => (
                    <tr>
                        <td><TaskName task={t} /></td>
                        <td><InputTime number={t.time} task={t} />{"min"}</td>
                        <td><TaskTime time={t.startTime} /></td>
                        <td><TaskTime time={t.stopTime} /></td>
                        <td><TaskTime time={t.startEst} /></td>
                        <td><TaskTime time={t.stopEst} /></td>
                        <td> {t.button()} </td>
                        <td> {t.graph()} </td>
                    </tr>
                ))}
                </tbody>
                </table>
                </div>
        )
    }
}
