import Link from 'next/link'
import Image from 'next/image'
import Menu from 'global/organism/Menu'
import Navbar from 'global/organism/Navbar'
import React , {useState} from 'react'
import { useRouter } from "next/router";
import { LogoWrapper , MenuData , SubmenuData} from './_style';
import menuData from '@/infra/Data/pages.json'
import Warning from 'global/organism/Warnings';

// IMPORTS FOR NAVBAR
import Logo from '@/assets/icons/logo.svg'
import Search from 'global/molecules/Search'
import Sidebar from 'global/organism/Sidebar'
import Divisor from 'global/atoms/Divisor'


export const Header = () => {  

    const { locale , pathname } = useRouter();
    const PageMenu = menuData[locale];

    return (
        <>
            <Navbar>
                <Sidebar/>                
                <LogoWrapper>
                    <Link href='/'>
                        <Image src={Logo} width='120' height='25'/>
                    </Link>
                </LogoWrapper>                
                <Search/>
            </Navbar>
            <Menu>
                <MenuData>
                    { PageMenu && PageMenu.map((page, i) => {                        
                        const area = pathname.split('/')[1] == page.link.split('/')[1]                        
                        return (
                            page.link === '/' ? null : 
                                <li key={i} className={area ? 'active' : null}>
                                    <Link href={page.link}><a>{page.title}</a></Link>
                                </li>
                        )
                    })}
                </MenuData>
            </Menu>
            {
                PageMenu && PageMenu.map(page => {
                    const tabs = pathname.split('/')[1] == page.link.split('/')[1] ? page.tabs : null 

                    const submenu = tabs ? 
                        <>
                            <SubmenuData>
                                {tabs && tabs.map((item, i) => (
                                    <li key={i} className={pathname == item.link ? 'active' : null}>
                                        <Link href={item.link}><a>{item.title}</a></Link>
                                    </li>
                                ))}
                            </SubmenuData>     
                            <Divisor />   
                        </>     
                    : null
                    return submenu
                })
            }
            <Warning/>
        </>
    )
 }


export default Header