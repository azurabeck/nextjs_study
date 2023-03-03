import Image from 'next/image'
import ImageImp from '../../../../assets/images/cover_2.png'
import Link from 'next/link'
import MenuMobile from '../../../MenuMob'
import React , { useState } from 'react'
import Pages from '../../../../infra/Data/pages.json'
import { useRouter } from "next/router";
import { 
  Decoration, 
  MenuWrapper, 
  Title,
  Title_Var01, 
  Title_Var02, 
  Title_Var03, 
  Title_Var04, 
  TopWrapper, 
  Wallpaper
}   from './style'

export default function Type_2() {

  const [menu , setMenuState] = useState(false)  
  const { locale, asPath } = useRouter();
  const PageMenu = Pages[locale];

  return (
    <div>     
        <TopWrapper>
          <MenuMobile />
        </TopWrapper>

        <Wallpaper>
          <Image src={ImageImp} width="420.44" height="598.39" />
          <Title>
              <Title_Var01>Hello World, I'm </Title_Var01> <br/>
              <Title_Var02>Rebecca Gomes</Title_Var02> 
              <Title_Var03>and I'm a</Title_Var03><br/>
              <Title_Var04>Design & Code Developer</Title_Var04>
          </Title>            
        </Wallpaper>

        <MenuWrapper>
            <Decoration decor_size='99%'></Decoration>
            <ul>
                { PageMenu && PageMenu.map((page, i) => (
                    <li key={i} className={page.link + '/' === asPath ? 'active' : null}><Link href={page.link}><a>{page.title}</a></Link></li>
                ))    }        
            </ul>       
        </MenuWrapper>
    </div>
  )
}
