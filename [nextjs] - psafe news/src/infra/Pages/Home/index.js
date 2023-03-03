import React from 'react'
import Locale from './_locale'
import { Text } from './_style'
import { useRouter } from "next/router";

export const About = () => {  
    
    const { locale } = useRouter();
    const LocaleText = Locale[locale]

    return (
        <Text dangerouslySetInnerHTML={{ __html: LocaleText }} /> 
    )
 }


export default About