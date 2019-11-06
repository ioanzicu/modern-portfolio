import React from 'react'
import Icon from '../Icon/Icon'
import './Card.css'

const AboutCard = ({ icon, title, description, index }) => (
  <div className={`card card-${index + 1}`}>
    <div className='card-title'>
      <i className={icon} />
      <h2>
        <b>{title}</b>
        <hr />
      </h2>
    </div>
    <span dangerouslySetInnerHTML={{ __html: description }} />
  </div>
)

const SkillsCard = ({ title, icons, cardNr }) => (
  <div className={`card card-${cardNr}`}>
    <h2 className='card-title'>
      <b>{title}</b>
      <hr />
    </h2>
    <div className='box-icon-wrapper'>
      {icons &&
        icons.map(({ id, dataInfo, icon }) => (
          <Icon key={id} dataInfo={dataInfo} icon={icon} />
        ))}
    </div>
  </div>
)

export { AboutCard, SkillsCard }
