import React, { useEffect } from 'react'
import { Container, Title, Video, VideoIframe, Arrow } from './styles'

export default function VideoBox({ navigate }) {

  return (
    <Container id="video-box">
      <Title> Dia a Dia </Title>
      <Video
        src={"https://www.youtube.com/embed/NVTKsSQIg10"}
        volume={10}
        loop
        // autoPlay={true}
        controls={true}
      />
      <Arrow onClick={() => navigate()} />
    </Container>
  )
}
