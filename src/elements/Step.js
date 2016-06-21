import React, { Children, PropTypes } from 'react'
import numberToWords from '../utils/numberToWords'

const { func, string, bool } = PropTypes

const Step = ({ active, icon, title, description, onClick }) => (
  <div className={`${active ? 'active ' : ''}step`} onClick={onClick}>
    <i className={`${icon} icon`}></i>
    <div className="content">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  </div>
)

Step.propTypes = {
  active: bool,
  icon: string,
  title: string,
  description: string,
  onClick: func,
}

export default Step
