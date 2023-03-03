
import App from 'next/app'
import {ThemeProvider} from 'styled-components'
import { theme , GlobalStyle , ContentWrapper } from '../src/assets/_style'

// IMPORT GLOBALS
import Header from 'global/templates/Header'

export default class MyApp extends App {
   render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>
        <ContentWrapper>
          <Component {...pageProps} />    
        </ContentWrapper>
      </ThemeProvider>
    )
  }
}