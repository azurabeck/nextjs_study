import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const theme = {
    colors: {
      primary: '#61777B',
  
      // NEUTRAL COLORS
      gray: '#888888',
      light_gray: "#A2B2B6",
      dark_gray: '#747474',
  
      // HOT COLORS
      red: '#DB2222',
      pink: '#F54653',
      pink_2: '#E64242',
      orange: '#FBAF40',
      yellow: '#FCD546',
      wine: '#B46280',
      purple: '#6100ff',
  
      // LIGHT COLORS
      light_blue: '#69AFBD',
    },
    fonts: {
      big_shoulder: 'Big Shoulders Display',
      roboto:  'Roboto, sans-serif',

      //to calc -> (value - 10) / 2. Sample do get postion from value 22 -> (22 - 10) / 2 = 6
      //pos: [0]     [1]     [2]     [3]     [4]     [5]     [6]     [7]     [8]     [9]     [10]    [11]
      size: ['10px', '12px', '14px', '16px', '18px', '20px', '22px', '24px', '26px', '28px', '30px', '32px'] 
    },
    space: { none: 0, xxs: '4px', xs: '8px', sm: '12px', md: '16px', lg: '20px', xl: '24px', xxl: '28px', hg: '32px'  }
  }

  export const GlobalStyle = createGlobalStyle`
      * {      
        font-family: ${theme.fonts.roboto};
        font-size: ${theme.fonts.size[3]};
        margin: 0;
      }

      body {        
        background: linear-gradient(#ffffff, #d1d1d1);   
      }

      @media only screen and (min-width: 450px) {
          * {            
              font-size: ${theme.fonts.size[5]};
          }
      }
  `
  
  export const ContentWrapper = styled.div`
      margin: 0 auto;
      margin-top: 15px;
      max-width: 1050px;
      padding: 0 30px;

      @media only screen and (min-width: 450px) {
        margin-top: 80px;
      }
  `