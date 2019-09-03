import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import InputField from './components/InputField'
import Output from './components/OutputField'
import { startTerm } from './data'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: startTerm,
      output: ''
    }
  }
  componentDidMount () {
    this.inputChangesOutput(startTerm)
  }
  inputChangesOutput (term) {
    this.setState({input: term, output: term})
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Markdown Previewer</h2>
          <p>by Greg Duncan</p>
        </div>
        <p className='App-intro'>
          Type markdown in the left box
        </p>
        <InputField 
          onAddedInput={this.inputChangesOutput.bind(this)}
          startTerm={startTerm} />
        <Output data={this.state.output} />
      </div>
    )
  }
}

export default App
