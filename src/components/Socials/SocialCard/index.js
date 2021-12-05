import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone as farClone } from '@fortawesome/free-regular-svg-icons'
import {
  faClone as fasClone,
  faCheck,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import Tooltip from '../Tooltip/index'

const SocialCard = ({ icon, label, color, link }) => {
  const [copyIcon, setCopyIcon] = useState(farClone)
  const [copyIconOpacity, setCopyIconOpacity] = useState(0.4)
  const [arrowIconOpacity, setArrowIconOpacity] = useState(0.4)
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
      {link
        ? (
        <span
          className="arrow-btn"
          onMouseEnter={() => {
            setArrowIconOpacity(1)
          }}
          onMouseLeave={() => {
            setArrowIconOpacity(0.4)
          }}
        >
          <a href={link}>
            <FontAwesomeIcon icon={faArrowRight} opacity={arrowIconOpacity} />
          </a>
        </span>
          )
        : (
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
          )}
    </div>
  )
}

SocialCard.propTypes = {
  icon: PropTypes.object,
  label: PropTypes.object,
  color: PropTypes.string,
  link: PropTypes.string
}

export default SocialCard
