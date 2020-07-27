import React from 'react'

import LogoApp from '../LogoApp'
import './menu.css'
import ButtonLink from '../buttonLink'

function Header() {
  return (
    <nav className="menu">
      <a href="/">
        <LogoApp />
      </a>
      <ButtonLink href="/" className="ButtonLink">
        Novo vídeo
      </ButtonLink>
    </nav>
  )
}

export default Header
