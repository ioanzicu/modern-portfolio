import React from 'react'
import './Heading.css'

const Heading = ({ title, secondaryTitle = 'Me', subtitle, subtitleIcon }) => (
  <>
    <h1 className='lg-heading'>
      {title}
      <span className='text-secondary'> {secondaryTitle}</span>
    </h1>
    {subtitle && (
      <h2 className='sm-heading'>
        {subtitle} {subtitleIcon && <i className={subtitleIcon} />}
      </h2>
    )}
  </>
)

export default Heading
