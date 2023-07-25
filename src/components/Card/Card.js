import React from "react";
import Icon from "../Icon/Icon";
import "./Card.css";

const AboutCard = ({ icon, title, description, index }) => (
  <div className={`card card-${index + 1}`}>
    <div className="card-title">
      {icon && <i className={icon} />}
      <h2>
        {title && <b>{title}</b>}
        <hr />
      </h2>
    </div>
    {description && <span dangerouslySetInnerHTML={{ __html: description }} />}
  </div>
);

const ExperienceCard = ({ icon, title, from, to, company, addres, tasks, index }) => (
  <div className="card exp-card">
    <div className="card-title">
      {/* {icon && <i className={icon} />} */}
      <h2>
        {title && <b>{title}</b>} {company && `at ${company}`}, {from && to && `${from} - ${to}`}, {addres && addres}
        <hr />
      </h2>
    </div>
    <ul>
      {tasks && tasks.map((task, idx) => (
        // <li className="work-task">{task}</li>
        <li key={`${idx * 300}*&^*(0)`} className="work-task" dangerouslySetInnerHTML={{ __html: task }}></li>
      ))}
    </ul>
  </div>
);

const SkillsCard = ({ title, icons, cardNr }) => (
  <div className={`card card-${cardNr}`}>
    <h2 className="card-title">
      {title && <b>{title}</b>}
      <hr />
    </h2>
    <div className="box-icon-wrapper">
      {icons &&
        icons.map(({ id, dataInfo, icon }) => (
          <Icon key={id + dataInfo} dataInfo={dataInfo} icon={icon} />
        ))}
    </div>
  </div>
);

export { AboutCard, SkillsCard, ExperienceCard };
