import Divisor from 'global/atoms/Divisor'
import React from 'react'
import { NavbarWrapper } from './_style'

export const Navbar = (props) => {  
    
    return (
        <>
            <NavbarWrapper>{props.children}</NavbarWrapper>
            <Divisor />
        </>
    )
 }


export default Navbar