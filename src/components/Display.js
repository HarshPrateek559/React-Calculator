import React from 'react'
import PropTypes from 'prop-types'

const Display = props => {
  return (
    <div>Change: {props.show}</div>
  )
}

Display.propTypes = {
    show: PropTypes.string
}

export default Display