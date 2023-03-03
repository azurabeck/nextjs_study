import styled from 'styled-components'
import { theme } from 'assets/_style'

export const NavbarWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${theme.max_area};
    padding: ${theme.padding.mobile};

    // Desktop view //
    @media only screen and (min-width: 1250px) {
        height: 65px;
        padding: ${theme.padding.desktop};
    }
`