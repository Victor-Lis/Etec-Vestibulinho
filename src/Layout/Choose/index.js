import React from 'react'
import { Container, Title, SubTitle, Video, VideoIframe } from './styles'
// import VideoSRC from '../../Assets/sobre.mp4'

export default function Choose({navigate}) {

  return (
    <Container id="choose-box">
        <Title> Conheça os cursos </Title>
          <SubTitle> Administração </SubTitle>
          <VideoIframe src={"https://youtube.com/embed/tIWWroRfxOM"}/>
          
          <SubTitle> Desenvolvimento de Sistemas </SubTitle>
          <VideoIframe src={"https://youtube.com/embed/d9i2Jp0f0Yk"}/>

          <SubTitle> Marketing </SubTitle>
          <VideoIframe src={"https://youtube.com/embed/Mz6_VoDy1dw"}/>

    </Container>
  )
}
