import Divisor from 'global/atoms/Divisor'
import React from 'react'
import { MenuContainer , MenuWrapper } from './_style'

export const Menu = (props) => {  
    
    return (
        <MenuWrapper>
            <MenuContainer>{props.children}</MenuContainer>
            <Divisor />
        </MenuWrapper>
    )
 }


export default Menu