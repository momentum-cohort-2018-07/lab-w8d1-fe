import React from 'react'

class TextEntry extends React.Component {
  render () {
    const { text, updateText } = this.props
    return (
      <React.Fragment>
        <textarea
          className='TextEntry-textbox'
          placeholder='What do you want to shrink?'
          onChange={updateText}
          value={text} />
        <div>
          {text && `${text.length} characters`}
        </div>
      </React.Fragment>
    )
  }
}

export default TextEntry
