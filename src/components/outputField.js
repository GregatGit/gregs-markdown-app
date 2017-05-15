import React, { Component } from 'react';
import marked from 'marked';

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
        data =  marked(data);
        return data;
    }

}

export default Output;