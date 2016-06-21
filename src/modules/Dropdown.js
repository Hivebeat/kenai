import React, { PropTypes } from 'react'

const { string, array, func } = PropTypes

const Dropdown = ({ id, data, onChange, valueKey = 'value', nameKey = 'name', size = 'large' }) => (
  <select id={id} className={`ui ${size} fluid search dropdown`} multiple value={[]} onChange={onChange}>
    {data.map((opt) => <option value={opt[valueKey]}>{opt[nameKey]}</option>)}
  </select>
)

Dropdown.propTypes = {
  data: array.isRequired,
  id: string.isRequired,
  valueKey: string,
  nameKey: string,
  onChange: func,
  size: string,
}

export default Dropdown
