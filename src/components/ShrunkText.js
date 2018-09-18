import React from 'react'
import textOptions from '../textOptions'

class ShrunkText extends React.Component {
  shrinkText () {
    let { text, options } = this.props

    if (!text) {
      return ''
    }

    let opObj
    options.forEach(option => {
      opObj = textOptions.find(o => o.id === option)
      if (opObj) {
        text = opObj.fn(text)
      }
    })

    return text
  }

  render () {
    const shrunkText = this.shrinkText()

    return (
      <React.Fragment>
        <div className='TextEntry-shrunk-text'>
          {shrunkText}
        </div>
        <div>
          {shrunkText && `${shrunkText.length} characters`}
        </div>
      </React.Fragment>
    )
  }
}

export default ShrunkText
