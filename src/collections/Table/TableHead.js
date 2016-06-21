import React, { PropTypes } from 'react'

const TableHead = ({ children }) => (<thead>{children}</thead>)

TableHead.propTypes = {
  children: PropTypes.any,
}

export default TableHead
