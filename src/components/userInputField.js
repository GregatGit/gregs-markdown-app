import React, { Component } from 'react';
class InputField extends Component {

    constructor(props){
        super(props);
        this.state = {data: ''};
    }

    onInputChanged(plainText){
        //this.setState({data: plainText});
        this.props.onInputChanged(plainText);
    }

    render(){
        return (
            <input value={this.state.data} className="userInput" 
            onChange={(event) => {
                let data = event.target.value;
                this.setState({data });
                this.onInputChanged(data);
                console.log(this.state.data)}}
            />
        );
    }
};

export default InputField;

/*
    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState(({term}));
        this.props.onSearchTermChange(term);
    }
}
 */
