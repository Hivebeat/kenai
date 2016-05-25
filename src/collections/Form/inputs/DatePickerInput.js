import React, { PropTypes } from 'react'
import InputWrapper from './InputWrapper'

const DatePickerInput = ({ openDatePicker, title value}) => (
  <div className="ui action input">
    <input ref="value" type="text" placeholder={title} value={value} readOnly style={{ cursor: 'not-allowed' }} />
    <button onClick={openDatePicker} className="ui huge icon button"><i className="calendar icon"></i></button>
  </div>
)

DatePickerInput.propTypes = {
  openDatePicker: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.string
}

export default InputWrapper(DatePickerInput)
