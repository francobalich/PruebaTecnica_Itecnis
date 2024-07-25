import React from 'react'
import imgLogo from '../assets/itecnis_logo.png'

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li><a href='/'><img src={imgLogo} alt='itecnis logo' /></a></li>
      </ul>
    </nav>
  )
}
