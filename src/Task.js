import moment from "moment"
import React from "react"

export default class {
    constructor(o){
        this.name = o.name;
        this.time = o.time;
        // this.startEst;
        // this.stopEst;
        this.startTime = o.startTime ? moment(o.startTime) : undefined; 
        this.stopTime  = o.stopTime  ? moment(o.stopTime)  : undefined; 

        this.taskState = o.taskState ? o.taskState : "todo"; // todo, doing, done
        this.taskType = o.taskType ? o.taskType : "default"; //default, fix
        this.complete = o.complete;
    }

    estimate(prevTask){
        if(this.taskState === "done") {
            this.startEst = this.startTime
            this.stopEst  = this.stopTime
        }else if(this.taskState === "doing"){
            this.startEst = this.startTime
            this.stopEst  = moment(this.startEst).add(this.time,"m")
        }else{
            this.startEst = prevTask ? prevTask.stopEst : moment();
            this.stopEst  = moment(this.startEst).add(this.time,"m")
        }
    }

    start(){
        if(this.taskState !== "todo") return
        this.startTime = moment();
        this.taskState = "doing"

        if(this.callback) this.callback();
    }
    stop(){
        if(this.taskState !== "doing") return
        this.stopTime = moment();
        this.complete = true;
        this.taskState = "done"
        
        if(this.callback) this.callback();
    }
    cancel(){
        this.startTime = undefined;
        this.stopTime = undefined;
        this.complete = false;
        this.taskState = "todo"

        if(this.callback) this.callback();
    }
    setReload(callback) {
        this.callback = callback;
    }
    button() {
        if(this.taskState === "done") 
            return <button onClick={(e)=>this.cancel()}>cancel</button>   
        if(this.taskState === "todo")
            return <button onClick={(e)=>this.start()}>開始</button>;
        else{
            return (
            <div>
             <button onClick={(e)=>this.stop()}>終了</button>   
             <button onClick={(e)=>this.cancel()}>cancel</button>   
            </div>
            )
        }
    }
    graph(){
        let s = moment().hour(18).min(0)
        let left = moment(this.startEst).diff(s, "m");
        let width = moment(this.stopEst).diff(this.startEst, "m");
        let b = 2
        let pos = {
            left: left*b,
            width: width*b,
            background: "#aae",
        }
        return (
            <div style={{position:"relative"}}>
                <div style={Object.assign({position:"relative"}, pos)}>_</div>
            </div>
        )
    }
}
