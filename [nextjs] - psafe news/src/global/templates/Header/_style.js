import styled from 'styled-components'
import { theme } from 'assets/_style'

export const MenuData = styled.ul`
    align-items: center;
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 100%;

    li {         
        a {        
            color: ${theme.colors.font_default};
            font-size: ${theme.fonts.size[2]};
            font-weight: 500;
            font-style: bold;
            text-decoration: none;

            &:hover {
                color: ${theme.colors.purple};
            }
        }        

        &.active {
            a {
                color: ${theme.colors.purple};
            }
        }
    }
`

export const SubmenuData = styled.ul`
    align-items: center;
    display: flex;
    height: 45px;
    justify-content: flex-start;
    list-style: none;
    margin: 0 auto;
    max-width: 940px;
    width: 100%;

    li {         
        a {        
            color: ${theme.colors.font_gray_light};
            font-size: ${theme.fonts.size[2]};
            font-weight: 500;
            margin-right: ${theme.margin.md};
            text-decoration: none;
            text-transform: lowercase;

            &:hover {
                color: ${theme.colors.purple};
            }
        }        

        &.active {
            a {
                color: ${theme.colors.purple};
            }
        }
    }
`

export const LogoWrapper = styled.div`
    z-index: 0;
    cursor: pointer;
    &:hover {
        img {
            color: #3B0593;
        }        
    }
`