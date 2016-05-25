import React, { PropTypes } from 'react'

const InputWrapper = (Input) => (props) => (
  <div className="field">
    <Input { ... props }/>
  </div>
)

export default InputWrapper
