import React, { useEffect } from 'react'
import { Container, Title, Video, VideoIframe, Arrow } from './styles'

export default function VideoBox({ navigate }) {

  return (
    <Container id="video-box">
      <Title> Dia a Dia </Title>
      <VideoIframe
        src={"https://www.youtube.com/embed/NVTKsSQIg10a"}
      />
      <Arrow onClick={() => navigate()} />
    </Container>
  )
}
