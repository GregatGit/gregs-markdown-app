import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import InputField from './components/userInputField'
import Output from './components/outputField'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      output: ''
    }
  }

  inputChangesOutput (term) {
    this.setState({input: term, output: term})
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <InputField onAddedInput={this.inputChangesOutput.bind(this)} />
        <Output data={this.state.output} />
      </div>
    )
  }
}

export default App
