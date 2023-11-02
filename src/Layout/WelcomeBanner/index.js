import React from 'react'
import { Container, Mascote, Message, Arrow } from './styles'
import MascoteSRC from '../../Assets/Mascote.png'

export default function WelcomeBanner({navigate}) {

  return (
    <Container>
        <Message> Bem vindos <br/> futuros Etequianos!! </Message>
        <Mascote src={MascoteSRC}/>
        <Arrow onClick={() => navigate()}/>
    </Container>
  )
}
