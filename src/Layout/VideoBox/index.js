import React, { useEffect } from 'react'
import { Container, Title, Video, VideoIframe, Arrow } from './styles'

export default function VideoBox({ navigate }) {

  return (
    <Container id="video-box">
      <Title> Dia a Dia </Title>
      <Video
        src={"https://firebasestorage.googleapis.com/v0/b/vestibulinho-e6c24.appspot.com/o/sobre.mp4?alt=media&token=71adb586-fcdc-4df0-91f9-387b21519697&_gl=1*ijtcdy*_ga*MTI5ODMyMTc4NS4xNjg0NzU4MzY3*_ga_CW55HF8NVT*MTY5ODgzMjg1NS43Mi4xLjE2OTg4MzI4NjguNDcuMC4w"}
        volume={10}
        loop
        // autoPlay={true}
        controls={true}
      />
      <Arrow onClick={() => navigate()} />
    </Container>
  )
}
