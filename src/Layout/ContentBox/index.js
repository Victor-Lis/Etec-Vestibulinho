import React from 'react'
import { Container, Content, ContentTitle, ContentDescription, ContentEmphasis, SubscribeButton, Arrow } from './styles'

export default function ContentBox({navigate}) {

  return (
    <Container id="content-box">
      <Content>

        <ContentTitle> Ensino Médio / Técnico </ContentTitle>
        <ContentDescription> 
          O ensino médio técnico é uma modalidade de ensino que combina a formação básica do ensino médio com a qualificação profissional em uma área específica. Essa modalidade de ensino oferece uma série de vantagens para os estudantes, como: 
          <ContentEmphasis> Maior empregabilidade</ContentEmphasis> 
          ,<ContentEmphasis> menor tempo de formação</ContentEmphasis> 
          ,<ContentEmphasis> maior experiência prática</ContentEmphasis>. 
        </ContentDescription>
        <SubscribeButton href='https://www.vestibulinhoetec.com.br/' target='_blank'>Inscreva-Se</SubscribeButton>

      </Content>
      <Arrow onClick={() => navigate()}/>
    </Container>
  )
}
