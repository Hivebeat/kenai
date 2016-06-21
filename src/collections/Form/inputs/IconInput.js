import React, { PropTypes } from 'react'
import InputWrapper from './InputWrapper'

const { string, func, oneOf, bool } = PropTypes

const renderIcon = (icon) => <i className={`ui ${icon} icon`}/>;

const IconInput = ({ type = 'text', name, value, placeholder, icon, position = 'left', onChange, fluid }) => (
  <span>
    {name ? <label>{name}</label> :null}
    <div className={`ui ${position}${fluid ? ' fluid' : ''} icon input`}>
      {position === 'left' ? renderIcon(icon) : null}
      <input
        type={type}
        onChange={onChange}
        defaultValue={value}
        placeholder={placeholder}
      />
      {position === 'right' ? renderIcon(icon) : null}
    </div>
  </span>
)

IconInput.propTypes = {
  type: string,
  name: string,
  onChange: func,
  position: oneOf(['left', 'right']),
  icon: string,
  placeholder: string,
  value: string,
  fluid: bool
}

export default InputWrapper(IconInput)
