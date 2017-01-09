import React        from "react"
import store        from "store"
import moment       from "moment"
import Clock        from "./clock.js"
import InputTime    from "./inputTime.js"
import TaskRenderer from "../TaskRenderer.js"

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
                {tasks.map( t => <TaskRenderer task={t} onChange={(num)=>{
                    t.time = num
                    this.tick() 
                }} /> )}
                </tbody>
                </table>
                </div>
        )
    }
}
