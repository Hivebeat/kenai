import React, { PropTypes } from 'react';

const Form = ({ children, size = 'normal' }) => (
  <div className={`ui ${size} form`}>
    {children}
  </div>
);

Form.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string,
};

export default Form;
