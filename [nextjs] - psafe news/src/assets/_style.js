import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const theme = {
    colors: {
      
      // FONTS
      font_default: '#343434',
      font_white: '#FEFEFE',
      font_black_light: '#616161',
      font_gray_light: "#8C8597",

      // NEUTRAL COLORS
      white: '#F5F5F5',
      light_gray: "#D7D7D7", //Divisor,
      dark_gray: '#747474',
  
      // HOT COLORS
      purple: '#6100ff',      
    },
    fonts: {
      big_shoulder: 'Big Shoulders Display',
      roboto:  'Roboto, sans-serif',
      //to calc -> (value - 10) / 2. Sample do get postion from value 22 -> (22 - 10) / 2 = 6
      //pos: [0]     [1]     [2]     [3]     [4]     [5]     [6]     [7]     [8]     [9]     [10]    [11]
      size: ['10px', '12px', '14px', '16px', '18px', '20px', '22px', '24px', '26px', '28px', '30px', '32px'] 
    },
    space: { none: 0, xxs: '4px', xs: '8px', sm: '12px', md: '16px', lg: '20px', xl: '24px', xxl: '28px', hg: '32px'  },
    padding: {mobile: '0 15px', desktop: '0'},
    margin: { none: 0, xxs: '2px', xs: '8px', sm: '14px', md: '20px', lg: '40px', xl: '60px', xxl: '80px', hg: '100px' },
    max_area: '1250px',
  }

  export const GlobalStyle = createGlobalStyle`
      * {      
        font-family: ${theme.fonts.roboto};
        font-size: ${theme.fonts.size[3]};
        margin: 0;
      }

      body {        
        height: 100%;
        width: 100%;        
        font-size: ${theme.fonts.size[2]};
        color: ${theme.colors.font_default}
      }

      ul {
        padding: 0;
      }

      @media only screen and (min-width: 1250px) {
          * {            
              font-size: ${theme.fonts.size[3]};
          }
      }
  `
  
  export const ContentWrapper = styled.div`
      margin: 0 auto;
      max-width: ${theme.max_area};
      padding: ${theme.padding.mobile};

      // Desktop view //
      @media only screen and (min-width: 450px) {
        padding: ${theme.padding.desktop};
      }
  `