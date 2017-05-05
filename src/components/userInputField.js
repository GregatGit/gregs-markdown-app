import React, { Component } from 'react';

class InputField extends Component {

    constructor(props){
        super(props);
        this.state = {data: ''};
    }
    render(){
        return (
            <input value={this.state.data} className="userInput" 
            onChange={(event) => {
                let data = event.target.value;
                this.setState({data });
                console.log(event.target.value)}}
            />
        );
    }
};

export default InputField;
