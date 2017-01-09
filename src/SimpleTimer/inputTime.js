import React from "react"

export default class extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            number: props.number
        }
    }
    onChange(e){
        if(this.props.onChange)this.props.onChange(e.target.value)
        this.setState({
            number: e.target.value
        })
    }
    onKeyDown(e){
        if(e.key === "Enter") {
            if(this.props.onChange)this.props.onChange(e.target.value)
        }
    }
    
    render(){
        return (
            <input type="number" 
                value={this.state.number}
                onChange={(e) => this.onChange(e)}
            onKeyDown={(e) =>this.onKeyDown(Object.assign({}, e))} />
        )
    }
}
