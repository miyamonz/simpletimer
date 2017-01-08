import React from "react"
import SimpleTimer from "../src/SimpleTimer"

let tasks = [
    {name: "test ", time: 30},
    {name: "test ", time: 45},
]


export default () => 
    <SimpleTimer tasks={tasks}/>
