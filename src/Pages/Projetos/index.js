import React, {useContext} from 'react'
import { Container, Section, SectionTitle, Slider, VideoCard, VideoIframe, VideoCardTitle, VideoCardCreatedBy } from './styles'
import CursoSection from '../../Layout/CursoSection'

import { IndexContext } from '../../Contexts/index'

export default function Projetos() {

  const { keys } = useContext(IndexContext)

  return (
    <Container>
      {keys && keys.length > 0 && (

        keys.map(key => {

          return <CursoSection course={key}/>

        })

      )}
    </Container>
  )
}
