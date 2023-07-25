import React from 'react'
import './Icon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGolang, faJs, faPython, faHtml5, faCss3, faReact, faSass, faBootstrap, faGit, faDocker, faGitlab, faNpm, faYarn, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'


const iconsMap = {
  'golang': faGolang,
  'js': faJs,
  'python': faPython,
  'html5': faHtml5,
  'css3': faCss3,
  'react': faReact,
  'sass': faSass,
  'bootstrap': faBootstrap,
  'git': faGit,
  'gitlab': faGitlab,
  'npm': faNpm,
  'docker': faDocker,
  'sql': faDatabase,
  'yarn': faYarn,
  'linux': faLinux,
  'windows': faWindows,
}


const Icon = ({ dataInfo, icon }) => (
  <div className='box-icon'>
    <dfn data-info={dataInfo}>
      <FontAwesomeIcon icon={iconsMap[icon]} size="3x" />
    </dfn>
  </div>
)

export default Icon
