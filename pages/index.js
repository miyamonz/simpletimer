import React from "react"
import SimpleTimer from "../src/SimpleTimer"
import Task from "../src/Task.js"

let tasks = [
    {name: "test ", time: 30},
    {name: "test ", time: 45},
    {name: "test ", time: 45},
    {name: "test ", time: 45},
    {name: "test ", time: 45},
    {name: "test ", time: 45},
    {name: "test ", time: 45},
    {name: "test ", time: 45},
]
tasks = tasks.map( t => new Task(t) );


export default () => 
    <SimpleTimer tasks={tasks}/>
