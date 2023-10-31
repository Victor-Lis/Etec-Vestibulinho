import React from 'react'

import WelcomeBanner from '../../Layout/WelcomeBanner'
import ContentBox from '../../Layout/ContentBox'
import VideoBox from '../../Layout/VideoBox';

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

  return (
    <>
      <WelcomeBanner navigate={navigate1} />
      <ContentBox navigate={navigate2}/>
      <VideoBox/>
    </>
  )
}
