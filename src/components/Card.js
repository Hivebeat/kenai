import React, { PropTypes } from 'react'

const Header = ({ header, headerContent, description }) => (
  <div className='content'>
    {headerContent || null }
    <div className='header'>
      {header}
    </div>
    <div className='description'>
      <p>{description}</p>
    </div>
  </div>
)

const Card = (props) => (
  <div className={`ui ${props.fluid ? 'fluid' : ''} card`} style={props.style}>
    {props.header || props.description ? <Header {... props} /> : null}
    {props.children}
  </div>
)

Card.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any,
  headerContent: PropTypes.object,
  fluid: PropTypes.bool
}

export default Card
