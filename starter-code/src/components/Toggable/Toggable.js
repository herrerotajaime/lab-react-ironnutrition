import React, { Component } from 'react'
 export default class Toggable extends Component {
    constructor () {
        super();
        this.state = {open: true}
    }
     switchState = () => {
        this.setState({open: !this.state.open})
    }
     render () {
        let displayStr;
         if (this.state.open) {
            displayStr = "block"
        }   else {
            displayStr = "none"
        }
        return (
            <div>
                <button onClick={this.switchState}>Switch open/close</button>
                <div style={{display: displayStr}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
} 