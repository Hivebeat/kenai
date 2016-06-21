import React, { Children, PropTypes } from 'react'
import numberToWords from '../utils/numberToWords'

const Steps = ({ children, topAttached }) => (
  <div className={`ui ${numberToWords(Children.count(children)).replace(' only ', '')}${topAttached ? ' top attached' : ''} steps`}>{children}</div>
)

Steps.propTypes = {
  children: PropTypes.any,
  topAttached: PropTypes.bool
}

export default Steps
