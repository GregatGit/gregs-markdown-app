import React, { Component } from 'react';
import marked from 'marked';
marked.setOptions({
    gfm: true,
    sanitize: true
}); 

class Output extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        let myData = marked(this.props.data);
        return (       
            <div  dangerouslySetInnerHTML={{ __html: myData }}></div>
        );
    }
}

export default Output;