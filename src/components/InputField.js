import React, {Component} from 'react'
class InputField extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: ''
    }
  }
  componentDidMount () {
    this.setState({data: this.props.startTerm})

  }

  render () {
    return (<textarea
      id="editor"
      value={this.state.data}
      className='userInput'
      onChange={(event) => {
        let data = event.target.value
        this.setState({data})
        this.onInputChanged(data)
      }} />)
  }
  onInputChanged (plainText) {
    this
            .props
            .onAddedInput(plainText)
  }
};

export default InputField

// this.inputChangesOutput.bind(this);
