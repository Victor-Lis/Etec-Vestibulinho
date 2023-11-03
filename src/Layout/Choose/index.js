import React from 'react'
import { Container, Title, SubTitle, Video, VideoIframe } from './styles'
// import VideoSRC from '../../Assets/sobre.mp4'

export default function Choose({navigate}) {

  return (
    <Container id="choose-box">
        <Title> Conheça os cursos </Title>
          <SubTitle> Administração </SubTitle>
          <VideoIframe/>

          <SubTitle> Marketing </SubTitle>
          <VideoIframe/>
          
          <SubTitle> Desenvolvimento de Sistemas </SubTitle>
          <VideoIframe/>
    </Container>
  )
}
