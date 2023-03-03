import React from 'react'
import styled from 'styled-components'
import imageImp from '../src/assets/images/cover.png'

// IMPORTS INFRA
import Typography from '../src/infra/Typography'
import Head from '../src/infra/Head'


const MainWrapper = styled.div`  
  align-items: center;
  display: flex;
  height: 75vh;
  justify-content: center;
  padding: 0;
  position: relative;
`

const Decoration = styled.div`
      width: 100%;
      height: 18%;
      background: #CCD1D2;
      text-align: center;
      position: relative;

      div { 
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        height: 0px d;

        span { 
          top: 250px;
        }
      }
`

const Wallpaper = styled.div`
      background: ${(props) => `url(${props.imageImp.src})`}; 
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      height: 100%;
      position: absolute;
      width: 85%;

      @media only screen and (min-width: 450px) {
        width: 100%;
      } 
`


export function MainContainer() {
  return (
      <MainWrapper>
          <Decoration></Decoration>     
          <Wallpaper  imageImp={imageImp}></Wallpaper>    
      </MainWrapper>
  )
}

export default function Home() {
    return (
    
    <div>      
        <Head title='Rebecca Gomes - Home'></Head>
        <Typography>
            {MainContainer()}
        </Typography>
    </div>
  )
}
