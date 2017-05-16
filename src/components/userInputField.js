import React, {Component} from 'react'
class InputField extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  render () {
    return (<textarea
      value={this.state.data}
      className='userInput'
      onChange={(event) => {
        let data = event.target.value
        this.setState({data})
        this.onInputChanged(data)
        console.log(this.state.data)
      }} />)
  }
  onInputChanged (plainText) {
        // this.setState({data: plainText}); this.props.onInputChanged(plainText);
    this
            .props
            .onAddedInput(plainText)
  }
};

export default InputField

// this.inputChangesOutput.bind(this);
