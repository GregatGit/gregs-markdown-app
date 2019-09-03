import React from 'react'
import marked from 'marked'
marked.setOptions({
  gfm: true,
  sanitize: true
})

const Output = (props) => {
  let myData = marked(props.data)
  return (
    <div className="outputField" id="preview" dangerouslySetInnerHTML={{ __html: myData }} />
  )
}
export default Output
