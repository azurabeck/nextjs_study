import styled from 'styled-components'
import { theme } from 'assets/_style'

export const WarningWrapper = styled.div`
    
    background-color: ${theme.colors.purple};
    height: 120px;
    margin: 0 auto;
    margin-top: ${theme.margin.xxs};
    overflow: hidden;
    padding: ${theme.padding.mobile};
    position: relative;
    z-index: -1;

    // Desktop view //
    @media only screen and (min-width: 1250px) {
        font-size: ${theme.fonts.size[4]};
        padding: ${theme.padding.desktop};
    }
`

export const Curve = styled.div`
    bottom: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
`
export const Logo = styled.div`
    bottom: 0;
    height: 100%;
    left: 0;
    max-width: ${theme.max_area};  
    opacity: 50%;
    position: absolute;
    top: -258px;  
    z-index: 0;

    img {
        transform: rotate(350deg);
    }
`
export const WarningContainer = styled.div`
    align-items: center;
    bottom: 0;
    color: ${theme.colors.font_white};
    display: flex;    
    font-weight: 700;
    font-size: ${theme.fonts.size[3]};
    height: 100%;
    justify-content: center;
    width: 100%;
    position: absolute;
    z-index: 2;
`