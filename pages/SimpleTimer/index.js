import React from "react"
import store from "store"
import moment from "moment"
import Clock from "./clock.js"

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    let tasks = [];
    this.props.tasks.reduce((prev,t,i) => {
      t.start = (i === 0) ? moment() : prev.end;
      t.end   = moment(t.start).add(t.time, 'm')
      tasks.push(
        <tr>
          <td><input type="text" value={t.name}/></td>
          <td>{t.time}</td>
          <td>{t.start.format("HH:mm")}</td>
          <td>{t.end.format("HH:mm")}</td>
          </tr>
      )
      return t;
    }, moment())
    return (
      <div>
        <Clock />

        <table>
        <tr>
        <td>task</td>
        <td>timer</td>
        <td>start</td>
        <td>end</td>
        </tr>
        {tasks}

        </table>
        </div>
    )
  }
}
