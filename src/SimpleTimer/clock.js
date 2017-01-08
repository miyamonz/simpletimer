import React from "react"
import moment from "moment"
export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: moment().format("HH:mm:ss")
    }
  }
  tick() {
    let now = moment();
    this.setState({
      time: now.format("HH:mm:ss")
    })
    if(this.props.onTick) this.props.onTick(now)
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render() {
    return (
        <span>{this.state.time}</span>
    )
  }

}
