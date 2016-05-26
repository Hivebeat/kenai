import React, { PropTypes } from 'react'

const numberToString = (number) => {
  const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }
  return numbers[number]
}

const Menu = ({ items, type, size, children}) => (
  <div className={`ui ${items ? `${numberToString(items)} item` : ''} ${type} menu ${size || ''}`}>
    {children}
  </div>
)

Menu.propTypes = {
  items: PropTypes.number,
  type: PropTypes.string,
  children: PropTypes.any
}

export default Menu
