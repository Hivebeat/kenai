import React, { PropTypes } from 'react'
import InputWrapper from './InputWrapper';

const Input = ({ type, name, value, rows, onChange }) => (
  <span>
    <label>{name}</label>
    <textarea row={rows} defaultValue={value} onChange={onChange} />
  </span>
)

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputWrapper(Input)
