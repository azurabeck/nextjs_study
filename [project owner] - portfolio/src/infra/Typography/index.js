import React from 'react'
import PropTypes from 'prop-types'

function Typography(props) {
  return (
    <>{props.children}</>
  )
}

Typography.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Typography
