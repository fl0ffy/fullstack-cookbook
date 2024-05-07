import React from "react";

export default class ClickTracker extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            clickConter: 0
        }

    }

    handleClick(){
        var count = this.state.clickConter + 1;
        this.setState({
            clickConter: count
        })
    }

    render(){
        return (
            <button onClick={this.handleClick.bind(this)}>
                {this.props.buttonText}
                {this.state.clickConter}
            </button>
        )
    }
}