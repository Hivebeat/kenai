import React, { PropTypes } from 'react'

const { bool, string, any } = PropTypes

const boolClass = (className, bool) => bool ? ` ${className}` : ''

const Table = ({ children, celled, padded, basic, collapsing, striped, definition, structured, selectable, className }) => (
  <table className={`ui${boolClass('celled', celled)}${boolClass('striped', striped)}${boolClass('padded', padded)}${boolClass('basic', basic)}${boolClass('collapsing', collapsing)}${boolClass('definition', definition)}${boolClass('structured', structured)}${boolClass('selectable', selectable)} ${className ? className : ''} table`}>
    { children }
  </table>
)

Table.propTypes = {
  children: any,
  celled: bool,
  padded: bool,
  basic: bool,
  collapsing: bool,
  striped: bool,
  definition: bool,
  structured: bool,
  className: string,
}

export default Table
