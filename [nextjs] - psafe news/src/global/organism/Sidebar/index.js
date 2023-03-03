
import Link from 'next/link'
import React, { useState } from 'react'
import { MenuOption, OutsideArea, SidebarClose, SidebarContainer, SidebarMenu, SidebarOpen, SidebarWrapper, SubOption } from './_style'
import { barsIc , arrowUpIc , arrowDownIc } from '@/assets/fontawesome'
import { useRouter } from "next/router";
import MenuData from '@/infra/Data/pages.json'

export const Sidebar = (props) => {  

    const [ sidebarState , setSidebarState ] = useState(false)
    const [ menuState , setMenuState ] = useState(null)
    const { locale , pathname } = useRouter();
    const PageMenu = MenuData[locale];
    
    return (
            <SidebarWrapper>
                <SidebarClose onClick={() => setSidebarState(!sidebarState)}>{barsIc}</SidebarClose>
                {
                    sidebarState && 
                    <SidebarOpen>
                        <SidebarContainer>
                            <span/>

                            <SidebarMenu>
                                { PageMenu && PageMenu.map((page, i) => {
                                    
                                    const tabs = page.tabs 
                                    const area = pathname.split('/')[1] == page.link.split('/')[1]
                                    const open = menuState == page.link
                            
                                    return (
                                        <li key={i}>
                                            {
                                                page.tabs ?
                                                  <>
                                                    <MenuOption onClick={menuState === page.link ? () => setMenuState(null) : () => setMenuState(page.link)}>
                                                        <label className={area ? 'item-active' : null}>{page.title}</label> 
                                                        {open ? arrowUpIc : arrowDownIc}
                                                    </MenuOption>
                                                    <SubOption>                                                    
                                                        {
                                                            tabs && open && tabs.map((subOption, i) => {
                                                                return (                                                                    
                                                                   <label 
                                                                        className={pathname == subOption.link ? 'sub-active' : null} 
                                                                        key={i}
                                                                        onClick={() => setSidebarState(false)}>
                                                                            <Link href={subOption.link}><a>{subOption.title}</a></Link>
                                                                    </label> 
                                                                )
                                                            })
                                                        }
                                                    </SubOption>
                                                  </>
                                                : <Link href={page.link}><a>
                                                        <label 
                                                            className={pathname == page.link ? 'item-active' : null} 
                                                            onClick={() => setSidebarState(false)}>{page.title}</label> 
                                                  </a></Link>
                                            }                                            
                                        </li>
                                    )
                                })}
                            </SidebarMenu>

                        </SidebarContainer>
                        <OutsideArea onClick={() => setSidebarState(!sidebarState)}></OutsideArea>
                    </SidebarOpen>
                }                
            </SidebarWrapper>
    )
 }


export default Sidebar