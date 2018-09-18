import React, { Component } from 'react'

import TextEntry from './components/TextEntry'
import TextOptions from './components/TextOptions'
import ShrunkText from './components/ShrunkText'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      options: []
    }

    this.updateText = this.updateText.bind(this)
    this.setOption = this.setOption.bind(this)
  }

  updateText (event) {
    this.setState({ text: event.target.value })
  }

  setOption (option) {
    return (event) => {
      const value = event.target.checked
      let options = this.state.options
      if (value) {
        options = options.concat(option)
      } else {
        options = options.filter(o => o !== option)
      }
      this.setState({
        options: options
      })
    }
  }

  render () {
    const { text, options } = this.state
    return (
      <div className='App container'>
        <h1>TweetShrink</h1>
        <div className='row'>
          <div className='col'>
            <TextEntry text={text} updateText={this.updateText} />
          </div>
          <div className='col'>
            <ShrunkText text={text} options={options} />
          </div>
        </div>
        <div className='row options'>
          <div className='col-12'>
            <h4>Options</h4>
          </div>
          <TextOptions setOption={this.setOption} />
        </div>
      </div>
    )
  }
}

export default App
