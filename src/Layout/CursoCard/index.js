import React from 'react'
import { VideoCard, VideoIframe, VideoCardTitle, VideoCardCreatedBy } from './styles'

export default function CursoCard({url, title, uploadedBy}) {

    return (
        <VideoCard>

            <VideoIframe src={url && url}/>
            <VideoCardTitle> {title} </VideoCardTitle>
            <VideoCardCreatedBy> Enviado por: {uploadedBy} </VideoCardCreatedBy>

        </VideoCard>
    )
}
