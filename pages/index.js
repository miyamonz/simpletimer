import React from "react"

let tasks = [
    {name: "test ", time: 30},
    {name: "test ", time: 45},
]

export default () => (
    <div>
        <input type="time" />
        <button>now</button>
        <table>
            <tr>
                <td>task</td>
                <td>timer</td>
                <td>start</td>
                <td>end</td>
            </tr>
        {tasks.map( t => {
            return (
                <tr>
                    <td><input type="text" value={t.name}/></td>
                    <td>{t.time}</td>
                    <td>{t.time}</td>
                    <td>{t.time}</td>
                    <td><button>start</button></td>
                </tr>
            )
        } )}

        </table>
        </div>
)
