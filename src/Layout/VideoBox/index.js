import React from 'react'
import { Container, Video, Arrow } from './styles'
// import VideoSRC from '../../Assets/sobre.mp4'

export default function VideoBox({navigate}) {

  return (
    <Container id="video-box">
        <Video
            // src={VideoSRC}
            volume={10}
            loop
            autoPlay={true}
            controls={true}
        />
        <Arrow/>
    </Container>
  )
}
