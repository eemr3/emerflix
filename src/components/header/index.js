import React from 'react'

import Logo from '../../assets/img/logo.png'
import './menu.css'
import ButtonLink from '../buttonLink'

function Header() {
  return (
    <nav className="menu">
      <a href="/">
        <img src={Logo} alt="logo EMERFLIX" className="logo" />
      </a>
      <ButtonLink href="/" className="ButtonLink">
        Novo vídeo
      </ButtonLink>
    </nav>
  )
}

export default Header
