import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone as farClone } from '@fortawesome/free-regular-svg-icons'
import {
  faClone as fasClone,
  faCheck
} from '@fortawesome/free-solid-svg-icons'
import Tooltip from '../Tooltip/index'

const SocialCard = ({ icon, label, color }) => {
  const [copyIcon, setCopyIcon] = useState(farClone)
  const [copyIconOpacity, setCopyIconOpacity] = useState(0.4)
  const [tooltipActive, setTooltipActive] = useState(false)

  const handleCopyClick = () => {
    label.subname
      ? navigator.clipboard.writeText(label.name + label.subname)
      : navigator.clipboard.writeText(label.name)
    setTooltipActive(true)
    setCopyIcon(faCheck)
    setTimeout(() => {
      setTooltipActive(false)
      setCopyIcon(farClone)
      setCopyIconOpacity(0.4)
    }, 1500)
  }

  return (
    <div className="social-card" style={{ backgroundColor: color }}>
      {icon}
      <span>
        {label.name}
        <span style={{ color: '#ffffffaa' }}>{label.subname}</span>
      </span>
      <span
        className="copy-btn tooltip"
        onMouseEnter={() => {
          if (copyIcon !== faCheck) {
            setCopyIcon(fasClone)
            setCopyIconOpacity(1)
          }
        }}
        onMouseLeave={() => {
          if (copyIcon !== faCheck) {
            setCopyIcon(farClone)
            setCopyIconOpacity(0.4)
          }
        }}
        onClick={handleCopyClick}
      >
        {tooltipActive && <Tooltip text="COPIED" />}
        <FontAwesomeIcon icon={copyIcon} opacity={copyIconOpacity} />
      </span>
    </div>
  )
}

SocialCard.propTypes = {
  icon: PropTypes.object,
  label: PropTypes.object,
  color: PropTypes.string
}

export default SocialCard
