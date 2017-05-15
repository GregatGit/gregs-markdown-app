import React, { Component } from 'react';

class Output extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        let myData = this.changeData(this.props.data);
        return (
            <div>{myData}</div>
        );
    }
    changeData(data){
        return data.toUpperCase();
    }

}

export default Output;