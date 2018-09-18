import React from 'react'
import textOptions from '../textOptions'
import TextOption from './TextOption'

class TextOptions extends React.Component {
  render () {
    const { setOption } = this.props

    return textOptions.map((option, idx) => (
      <div key={idx} className='col-6'>
        <TextOption option={option} setOption={setOption} />
      </div>
    ))
  }
}

export default TextOptions
