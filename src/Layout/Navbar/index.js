import React from 'react'
import { Header, Logo, HeaderNav, HeaderNavLink, HeaderSubscribeButton } from './styles'
import LogoSRC from '../../Assets/Logo.png'
// import Bot1 from '../../../Images/Bot1.png'

export default function Navbar() {
  return (
    <Header>

        <Logo src={LogoSRC} alt="Logo" /> 

        <HeaderNav>
            <HeaderNavLink to='/'>Home</HeaderNavLink>
            <HeaderNavLink to='/'>Ensino Técnico</HeaderNavLink>
            <HeaderNavLink to='/'>Cursos</HeaderNavLink>
        </HeaderNav>

        <HeaderSubscribeButton id="header-button" href='https://www.vestibulinhoetec.com.br/' target='_blank'>Inscreva-SE</HeaderSubscribeButton>

    </Header>
  )
}
