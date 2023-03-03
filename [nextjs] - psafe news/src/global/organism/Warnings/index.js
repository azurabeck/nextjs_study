
import React from 'react'
import Image from 'next/image'
import { Curve, Logo, WarningContainer, WarningWrapper } from './_style'
import CurveImage from '@/assets/images/curve.png'
import PSafe from '@/assets/images/psafeWhiteLogo.png'


export const Warning = (props) => {  
    
    return (
        <WarningWrapper>
            <Curve><Image src={CurveImage} layout="fill" /></Curve>
            <WarningContainer>COMUNICADO: NOSSO RECESSO SERÁ DO DIA 17/12 ATÉ O DIA 01/01</WarningContainer> 
            <Logo><Image src={PSafe} width='737' height='670'   /></Logo>
        </WarningWrapper>
    )
 }


export default Warning