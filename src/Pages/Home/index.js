import React from 'react'
import { Container } from './styles';

import WelcomeBanner from '../../Layout/WelcomeBanner'
import ContentBox from '../../Layout/ContentBox'
import VideoBox from '../../Layout/VideoBox';
import Choose from '../../Layout/Choose'

export default function Home() {

  const navigate1 = () => {
    const element = document.getElementById('content-box');
    console.log(element)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const navigate2 = () => {
    const element = document.getElementById('video-box');
    console.log(element)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const navigate3 = () => {
    const element = document.getElementById('choose-box');
    console.log(element)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Container>
      <WelcomeBanner navigate={navigate1}/>
      <ContentBox navigate={navigate2}/>
      <VideoBox navigate={navigate3}/> 
      <Choose/>
    </Container>
  )
}
