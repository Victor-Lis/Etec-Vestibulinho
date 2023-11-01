import React from 'react'
import { Container, Message, Arrow } from './styles'

export default function WelcomeBanner({navigate}) {

  return (
    <Container>
        <Message> Bem vindos, futuros Etequianos!! </Message>
        <Arrow onClick={() => navigate()}/>
    </Container>
  )
}
