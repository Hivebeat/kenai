import React, { PropTypes } from 'react'

const Card = (props) => (
  <div className={`ui ${props.fluid ? 'fluid' : ''} card`}>
    <div className='content'>
      {props.headerContent || null }
      <div className='header'>
        {props.header}
      </div>
      <div className='description'>
        <p>{props.description}</p>
      </div>
    </div>
    {props.children}
  </div>
)

Card.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.array,
  headerContent: PropTypes.object,
  fluid: PropTypes.bool
}

export default Card
