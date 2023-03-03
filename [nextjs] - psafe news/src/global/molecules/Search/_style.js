import styled from 'styled-components'
import { theme } from 'assets/_style'

export const SearchWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;    
`

export const SearchClose = styled.div`
    align-items: center;
    color: ${theme.colors.font_black_light};
    display: flex;
    font-size: ${theme.fonts.size[2]};
    justify-content: center;

    svg {
        color: ${theme.colors.purple};
        width: 16px;
        margin-left: ${theme.margin.xs};
    }
    
`