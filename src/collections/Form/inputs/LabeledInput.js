import React, { PropTypes } from 'react'
import InputWrapper from './InputWrapper'

const { string, func, oneOf } = PropTypes

const LabeledInput = ({ type, name, value, position = 'left', label, min, onChange }) => (
  <span>
    <label>{name}</label>
    <div className={`ui ${position} labeled input`}>
      {position === 'left' ? <div className="ui label">{label}</div> : null}
      <input type={type} defaultValue={value} onChange={onChange} min={min || null} />
      {position === 'right' ? <div className="ui label">{label}</div> : null}
    </div>
  </span>
)

LabeledInput.propTypes = {
  type: string,
  name: string,
  onChange: func,
  position: oneOf(['left', 'right']),
  label: string,
  min: string
}

export default InputWrapper(LabeledInput)
