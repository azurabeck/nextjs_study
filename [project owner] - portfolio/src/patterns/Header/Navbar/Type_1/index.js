import Link from 'next/link'
import React , { useState } from 'react'
import { NavbarWrapper , MenuWrapper } from './style'
import MenuMobile from '../../../MenuMob'
import Pages from '@/infra/Data/pages.json'
import { barsIc } from '@/assets/fontawesome'
import { useRouter } from "next/router";

export default function Type_1(props) {

  const [menu , setMenuState] = useState(false)
  const { locale } = useRouter();
  const PageMenu = Pages[locale];
  const getTitle = PageMenu.filter(page => page.link === props.path)

  return (
    <NavbarWrapper>   
        <MenuWrapper>
            <div onClick={() => setMenuState(!menu)}>
              { barsIc }          
              <label>{getTitle[0].title}</label>
            </div>
            { menu &&
                <ul>
                    { PageMenu && PageMenu.map((page, i) => (
                        page.link === '/' ? null : <li key={i}><Link href={page.link}><a>{page.title}</a></Link></li>
                    )) }
                </ul>        
            }
        </MenuWrapper>
        
        <MenuMobile />   
              
    </NavbarWrapper>
  )
}
