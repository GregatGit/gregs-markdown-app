import React, { Component } from 'react';

class Output extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        let myData = this.props.data;
        return (
            <div>{myData}</div>
        );
    }
}

export default Output;