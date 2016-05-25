import React, { PropTypes } from 'react'
import InputWrapper from './InputWrapper'

const DatePickerInput = ({ onChange, openModal, title, id, value}) => (
  <div className="ui action input">
    <input onChange={onChange} ref="value" type="text" placeholder={title} id={id} value={value} readOnly style={{ cursor: 'not-allowed' }} />
    <button onClick={openModal} className="ui huge icon button"><i className="calendar icon"></i></button>
  </div>
)

DatePickerInput.propTypes = {
  onChange: PropTypes.func,
  openModal: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string
}

export default InputWrapper(DatePickerInput)
