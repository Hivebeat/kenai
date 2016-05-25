import React, { PropTypes } from 'react'
import InputWrapper from './InputWrapper'

const Input = ({ type, name, value, onChange }) => (
  <span>
    <label>{name}</label>
    <input type={type} defaultValue={value} onChange={onChange} />
  </span>
)

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}

export default InputWrapper(Input)
