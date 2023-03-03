import React from 'react'
import PropTypes from 'prop-types'

import Type_1 from './Type_1'
import Type_2 from './Type_2'

export default function NavbarContainer(props) {
  return props.type === 1 ?  Type_1(props) : Type_2(props)
}

NavbarContainer.propTypes = {
  type: PropTypes.int
}



