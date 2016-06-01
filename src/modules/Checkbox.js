import React, { PropTypes } from 'react'

const { string, bool, func, oneOf } = PropTypes

const Checkbox = ({ type = '', disabled, readOnly, label, onChange }) => (
  <div className={`ui ${type} ${disabled ? 'disabled' : ''} ${readOnly ? 'read-only' : ''} checkbox`} onChange={onChange}>
    <input type='checkbox' />
    <label>{label}</label>
  </div>
)

Checkbox.propTypes = {
  label: string,
  readOnly: bool,
  disabled: bool,
  onChange: func,
  label: string.isRequired,
  type: oneOf(['', 'slider', 'toggle', 'radio'])
}

export default Checkbox
