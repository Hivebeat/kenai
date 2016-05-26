import React, { PropTypes } from 'react'
import numberToWords from '../../utils/numberToWords'

const Grid = ({ children, center, columns }) => (
  <div className={`ui${center ? ' center aligned' : ''}${columns ? ` ${numberToWords(columns).replace('only ', '')}column` : ''} grid`}>
    {children}
  </div>
)

Grid.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string
}

export default Grid
