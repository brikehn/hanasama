import React from 'react'
import PropTypes from 'prop-types'

const Tooltip = ({ text }) => {
  return <span className="tooltiptext">{text}</span>
}

Tooltip.propTypes = {
  text: PropTypes.string
}

export default Tooltip
