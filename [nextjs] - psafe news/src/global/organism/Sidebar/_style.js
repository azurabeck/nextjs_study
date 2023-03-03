import styled from 'styled-components'
import { theme } from 'assets/_style'

export const SidebarWrapper = styled.section`
    color: ${theme.colors.font_black_light};
    z-index: 1;
`

export const SidebarClose = styled.div`
    color: ${theme.colors.font_default};
    width: 15px;
    font-size: 15px;

        &:hover{
            color: ${theme.colors.purple};
            cursor: pointer;
        }
`

export const SidebarOpen = styled.div`
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
`

export const OutsideArea = styled.div`
    background-color: rgba(252, 252, 252, 0.85);
    bottom: 0;
    left: 440px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 998;
`

export const SidebarContainer = styled.div`
    background-color: #fff;
    bottom: 0;
    box-shadow: 0px 0px 10px 14px rgba(154, 138, 138, 0.4);
    left: 0;
    position: fixed;
    top: 0;
    width: 440px;
    z-index: 999;

    span {
        background-color: ${theme.colors.purple};
        display: block;
        height: 100%;
        position: fixed;
        width: 5px;
    }
`

export const SidebarMenu = styled.ul`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    list-style: none;
    margin-left: ${theme.margin.lg};
    margin-top: ${theme.margin.lg};
    padding: 0;

    li {         
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 35px;
        width: calc(100% - 40px);

        a {        
            color: ${theme.colors.font_default};
            font-size: ${theme.fonts.size[4]};
            margin-right: ${theme.margin.md};
            text-decoration: none;
            width: 100%;
            
            .item-active {
                color: ${theme.colors.purple};
            }
        }         
    }
`

export const MenuOption = styled.div`    
    align-items: center;
    color: ${theme.colors.font_default};
    cursor: pointer;
    display: flex;
    font-size: ${theme.fonts.size[4]};
    height: 35px;
    justify-content: space-between;
    margin-right: ${theme.margin.md};
    text-decoration: none;
    width: 100%;
    
    .item-active {
        color: ${theme.colors.purple};
    }
    
    svg {
        width: 15px;
    }

`

export const SubOption = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 0;
    text-decoration: none;
    text-transform: lowercase;
    width: 100%;

    label {
        align-items: center;
        border-radius: 5px;  
        display: flex;
        height: 40px;
        justify-content: space-between;
        margin-bottom: 2px;
        padding-left: 20px;
        width: 100%;

        a {                  
            font-size: ${theme.fonts.size[2]};
            svg {
                width: 15px;
            }
        }        

        &.sub-active {
            background-color: ${theme.colors.white};
            border-radius: 4px;     
            a {                
                color: ${theme.colors.purple};
            }
        }    

        &:hover {            
            background-color: ${theme.colors.white};
        }

        &:last-child {            
            margin-bottom: 30px;
        }
    }
`