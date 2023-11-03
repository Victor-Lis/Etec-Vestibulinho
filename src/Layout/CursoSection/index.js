import React, {useContext} from 'react'
import { Section, SectionTitle, Slider, } from './styles'
import CursoCard from '../CursoCard'
import { IndexContext } from '../../Contexts/index'

export default function CursoSection({course}) {
    
    const { videos } = useContext(IndexContext)

    return (
        <Section>

            <SectionTitle>{course}</SectionTitle>

            <Slider>    
                {videos[course] && videos[course].length > 0 && videos[course].map(video => {

                    return <CursoCard url={video.url} title={video.title} uploadedBy={video.uploadedBy}/>

                })}
            </Slider>

        </Section>
    )
}
