import styled, { keyframes } from "styled-components";

export const Container = styled.div`

    /* min-height: calc(70vh); */
    /* background: linear-gradient(40deg, #060606, #1e1e1e, #1e1e1e 20%, #060606); */
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 55% 0 0 0;
    padding: 25% 0 10% 0;

    @media (min-width: 500px){

        margin: 45% 0 0 0;
        padding: 9% 0 10% 0;

    }

`

export const Title = styled.h3`

    margin-top: 0%;
    color: rgba(255, 215, 40);
    font-size: 1.75rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10%;
    
    @media (min-width: 500px){
        font-size: 2.25rem; 
        margin-bottom: 2%;
    }

`

export const SubTitle = styled.h3`

    color: rgba(255,255,255);
    font-size: 1rem;
    text-transform: uppercase;
    text-align: center;
    margin: 2.5% 5%;
    
    @media (min-width: 500px){
        font-size: 1.75rem;
    }

`

export const Video = styled.video`

    width: 80%;
    max-height: 200px;
    max-width: 500px;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: 10px;
    background: #060606;
    margin-bottom: 20%;

    @media (min-width: 500px){
        margin-bottom: 5%;
        max-height: 300px;
        max-width: 550px;
    }

`
