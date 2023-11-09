import styled, { keyframes } from 'styled-components'

export const VideoCard = styled.div`

    min-width: 320px;
    max-width: 450px;
    overflow: hidden;
    border: 0.1px solid #fff;   
    border-radius: 15px;
    background: linear-gradient(75deg, rgba(0, 0, 0, 1), #1e1e1e);

`

export const VideoIframe = styled.iframe`

  min-width: 320px;
  aspect-ratio: 16/9;
  object-fit: cover;
  background: #060606;
  margin: 0;

  @media (min-width: 500px){

    min-width: 450px;

  }
`

export const VideoCardTitle = styled.h2`

    background: linear-gradient(150deg, rgba(255, 215, 40), rgba(255, 255, 40), rgba(255, 215, 40), rgba(255, 255, 40));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent; 
    font-size: .80rem;
    text-transform: uppercase;
    /* width: 95%; */
    padding: 0 2.5%;
    text-align: left;
    margin: 05px 0 10px 0;

    @media (min-width: 500px){
        font-size: 1.25rem;
    }

`

export const VideoCardCreatedBy = styled.h2`

    background: linear-gradient(150deg, rgba(225, 225, 225), rgba(235, 235, 235), rgba(225, 225, 225), rgba(235, 235, 235));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent; 
    font-size: .75rem;
    margin-bottom: 1.5%;
    /* width: 95%; */
    padding: 0 2.5%;
    text-align: left;
    margin: 5px 0 10px 0;
    
    @media (min-width: 500px){
        font-size: 1.05rem;
    }

`