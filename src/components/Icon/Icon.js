import React from 'react'
import './Icon.css'

const Icon = ({ dataInfo, icon }) => (
  <div className='box-icon'>
    <dfn data-info={dataInfo}>
      <i className={icon} />
    </dfn>
  </div>
)

export default Icon
