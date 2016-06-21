import React, { PropTypes } from 'react'
import InputWrapper from './InputWrapper'

const DatePickerInput = ({ openDatePicker, title, value }) => (
  <span>
    <label>{title}</label>
    <div className="ui action input">
      <input type="text" placeholder={title} value={value} onClick={openDatePicker} />
      <button onClick={openDatePicker} className="ui huge icon button"><i className="calendar icon"></i></button>
    </div>
  </span>
)

DatePickerInput.propTypes = {
  openDatePicker: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.string
}

export default InputWrapper(DatePickerInput)
