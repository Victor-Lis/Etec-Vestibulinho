import React from 'react'
import { Container, Title, SubTitle, Video } from './styles'
// import VideoSRC from '../../Assets/sobre.mp4'

export default function Choose({navigate}) {

  return (
    <Container id="choose-box">
        <Title> Conheça os cursos </Title>
        <SubTitle> Administração </SubTitle>
        <Video
            // src={VideoSRC}
            volume={10}
            loop
            // autoPlay={true}
            controls={true}
        />
        <SubTitle> Marketing </SubTitle>
        <Video
            // src={VideoSRC}
            volume={10}
            loop
            // autoPlay={true}
            controls={true}
        />
        <SubTitle> Desenvolvimento de Sistemas </SubTitle>
        <Video
            // src={VideoSRC}
            volume={10}
            loop
            // autoPlay={true}
            controls={true}
        />
    </Container>
  )
}
