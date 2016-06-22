import React, { PropTypes } from 'react'
import InputWrapper from './InputWrapper'

const Input = ({ type, name, value, min, onChange }) => (
  <span>
    <label>{name}</label>
    <input type={type} name={name} defaultValue={value} onChange={onChange} min={min || null} />
  </span>
)

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.string,
  onChange: PropTypes.func
}

export default InputWrapper(Input)
