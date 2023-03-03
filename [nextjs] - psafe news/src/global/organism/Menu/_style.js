import styled from 'styled-components'
import { theme } from 'assets/_style'

export const MenuWrapper = styled.section`
    display: none;

    // Desktop view //
        @media only screen and (min-width: 950px) {
        display: block;
    }
`

export const MenuContainer = styled.div`
    align-items: center;
    display: flex;
    height: 30px;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 940px;

    // Desktop view //
    @media only screen and (min-width: 450px) {
        height: 40px;
        padding: ${theme.padding.desktop};
    }
`