import React from 'react'
import PropTypes from 'prop-types'

// IMPORT COMPONENT
import NavbarContainer from './Navbar'

export default function Header(props) {  
  return (
    <header>{NavbarContainer(props)}</header>
  )
}

Header.propTypes = {
    children: PropTypes.node,
}