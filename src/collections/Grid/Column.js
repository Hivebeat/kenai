import React, { PropTypes } from 'react'

const Column = ({ children }) => (
  <div className="column">
    {children}
  </div>
)

Column.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string
}

export default Column
