import React, { PropTypes } from 'react'

const Item = ({ name, active, onClick }) => (
  <a onClick={onClick} className={`item${active ? ' active' : ''}`}>
    {name}
  </a>
)

Item.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

export default Item
