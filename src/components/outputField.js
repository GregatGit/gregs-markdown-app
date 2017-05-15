import React, { Component } from 'react';

class Output extends Component {
    constructor(props){
        super(props);
        this.state = {data: 'testing'};
    }
    render() {
        return (
            <div>{this.props.data}</div>
        );
    }
}

export default Output;