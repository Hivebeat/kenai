import React, { PropTypes } from 'react'
import numberToWords from '../../utils/numberToWords'

const Row = ({ children, columns }) => (
  <div className={`${columns ? numberToWords(columns).replace(' only ', '') : ''} column row`}>
    {children}
  </div>
)

Row.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string
}

export default Row
