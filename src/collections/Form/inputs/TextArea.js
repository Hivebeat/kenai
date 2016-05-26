import React, { PropTypes } from 'react'
import InputWrapper from './InputWrapper'

const TextArea = ({ type, name, value, rows, onChange }) => (
  <span>
    <label>{name}</label>
    <textarea rows={rows} defaultValue={value} onChange={onChange} />
  </span>
)

TextArea.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.string,
  onChange: PropTypes.func
}

export default InputWrapper(TextArea)
