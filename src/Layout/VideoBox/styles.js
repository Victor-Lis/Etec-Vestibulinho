import styled, { keyframes } from "styled-components";
import { FiChevronDown } from 'react-icons/fi'

export const Container = styled.div`

    /* min-height: calc(70vh); */
    /* background: linear-gradient(150deg, #060606, #1e1e1e, #1e1e1e 20%, #060606); */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15% 0 105% 0;
    /* height: 95vh; */

    @media (min-width: 500px){
        
        padding: .5% 0 .5% 0;

    }

`

const Spinning = keyframes`

    0%{

        background: linear-gradient(150deg, rgba(255, 215, 40), rgba(255, 255, 40), rgba(255, 215, 40), rgba(255, 255, 40));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        
    }

    25%{

        background: linear-gradient(150deg, rgba(255, 255, 40), rgba(255, 215, 40), rgba(255, 255, 40), rgba(255, 215, 40));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;

    }

    50%{

        background: linear-gradient(150deg, rgba(255, 215, 40), rgba(255, 255, 40), rgba(255, 215, 40), rgba(255, 255, 40));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;

    }

    75%{

        background: linear-gradient(150deg, rgba(255, 255, 40), rgba(255, 215, 40), rgba(255, 255, 40), rgba(255, 215, 40));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;

    }

    100%{

        background: linear-gradient(150deg, rgba(255, 215, 40), rgba(255, 255, 40), rgba(255, 215, 40), rgba(255, 255, 40));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;

    }

`

export const Title = styled.h3`

    background: linear-gradient(150deg, rgba(255, 215, 40), rgba(255, 255, 40), rgba(255, 215, 40), rgba(255, 255, 40));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.95rem;
    text-transform: uppercase;
    text-align: center;
    margin-top: 22.5%;
    margin-bottom: 5%;
    animation: ${Spinning} 20s linear infinite;
    filter: drop-shadow(0px 0px 10px rgba(255, 215, 40));
    
    @media (min-width: 500px){

        margin: 0;
        margin-top: 5.5%;
        margin-bottom: 1%;
       
    }

`

export const Video = styled.video`

    width: 80%;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: 10px;
    background: #060606;

    max-height: 400px;
    max-width: 600px;

`

const Floating2 = keyframes`

    0%{

        transform: translateY(5px);

    }

    50%{

        transform: translateY(0px);

    }


    100%{

        transform: translateY(5px);

    }

`

export const Arrow = styled(FiChevronDown)`

    animation: ${Floating2} 5s linear infinite;
    color: rgba(255, 215, 40);
    font-size: 3rem;
    transition: .04s;
    transform: translateY(5px);
    margin-top: 17.5%;
    
    @media (min-width: 500px){

        font-size: 4.25rem;
        margin-top: 0%;

    }

    &:hover{

        transition: .4s;
        cursor: pointer;
        opacity: 0.6;

    }

    /* margin-top: 25%; */

`;
