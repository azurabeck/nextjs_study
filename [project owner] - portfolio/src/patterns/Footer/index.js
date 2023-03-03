import React from 'react'
import PropTypes from 'prop-types'
import { FooterWrapper , FooterLogo } from './style'
import SocialNetwork from '../../infra/Data/socialNetwork'

export function FooterContainer() {
  return (
      <FooterWrapper>
        <FooterLogo>
          <label>Rebecca</label><br/>
          <p>Design & Code Developer</p>
        </FooterLogo>
        <section>
          <ul>
            { SocialNetwork.map((link, i) => (
              <li key={i}><a href={link.url} target='_blank' alt={link.alt}>{link.img}</a></li>
            )) }
          </ul>
        </section>
      </FooterWrapper>
  )
}

export default function Footer(props) {
  return (
    <footer>{FooterContainer()}</footer>
  )
}

Footer.propTypes = {
    children: PropTypes.node,
}

