import React, { useContext } from 'react'
import { Header, Logo, HeaderNav, HeaderNavLink, HeaderSubscribeButton } from './styles'
import LogoSRC from '../../Assets/Logo.png'

import { IndexContext } from '../../Contexts/index'

export default function Navbar() {

  const { page, setPage } = useContext(IndexContext)

  return (
    <Header>

        <Logo src={LogoSRC} alt="Logo" /> 

        <HeaderNav>
            <HeaderNavLink to='/'>Home</HeaderNavLink>
            <HeaderNavLink to='/ensino-tecnico'>Ensino Técnico</HeaderNavLink>
            <HeaderNavLink to='/cursos'>Cursos</HeaderNavLink>
        </HeaderNav>

        <HeaderSubscribeButton id="header-button" href='https://www.vestibulinhoetec.com.br/' target='_blank'>Inscreva-SE</HeaderSubscribeButton>

    </Header>
  )
}
