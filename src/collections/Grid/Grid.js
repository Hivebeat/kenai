import React, { PropTypes } from 'react'
import numberToWords from '../../utils/numberToWords'

const Grid = ({ children, center, columns, className }) => (
  <div className={`ui${center ? ' center aligned' : ''}${columns ? ` ${numberToWords(columns).replace('only ', '')}column` : ''} grid ${className}`}>
    {children}
  </div>
)

Grid.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string
}

export default Grid
