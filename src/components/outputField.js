import React, { Component } from 'react';
import marked from 'marked';
marked.setOptions({
    gfm: true,
    sanitize: true
}); 

const Output = (props) => {
    let myData = marked(props.data); 
    return (
        <div  dangerouslySetInnerHTML={{ __html: myData }}></div>
    )
}
export default Output;