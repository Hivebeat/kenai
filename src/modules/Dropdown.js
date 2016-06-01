import React, { PropTypes } from 'react'

const { string, array } = PropTypes

const Dropdown = ({ data, valueKey = 'value', nameKey = 'name', size = 'large' }) => (
  <select className={`ui ${size} fluid search dropdown`} multiple value={[]}>
    {data.map((opt) => <option value={opt[valueKey]}>{opt[nameKey]}</option>)}
  </select>
)

Dropdown.propTypes = {
  data: array.isRequired,
  valueKey: string,
  nameKey: string,
  size: string,
}

export default Dropdown
