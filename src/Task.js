import moment from "moment"

export default class {
    constructor(o){
        this.name = o.name;
        this.time = o.time;

        // this.startEst ;
        // this.endEst;
        this.startTime; 
        this.endTime; 

        this.taskState = "todo"; // todo, doing, done
        this.taskType = "default"; //default, fix
        this.complete = false;
    }

    estimate(prevTask){
        this.startEst = prevTask ? prevTask.endEst : moment();
        this.endEst   = moment(this.startEst).add(this.time,"m")
    }

    start(){
        if(this.complete) return
        this.startTime = moment();
    }
    stop(){
        if(this.complete || this.startTime) return
        this.startTime = moment();
        this.complete = true;
    }
    cancel(){
    }
}
