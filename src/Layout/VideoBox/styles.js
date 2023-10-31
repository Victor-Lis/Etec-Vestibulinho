import styled, { keyframes } from "styled-components";
import { FiChevronDown } from 'react-icons/fi'

export const Container = styled.div`

    /* min-height: calc(70vh); */
    /* background: linear-gradient(150deg, #060606, #1e1e1e, #1e1e1e 20%, #060606); */
    background: #1e1e1e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 50% 0; */
    height: 95vh;

    @media (min-width: 500px){
        
        height: 112.5vh;

    }

`

export const Video = styled.video`

    width: 90%;
    max-width: 500px;
    height: 47.5%;
    aspect-ratio: 3/4;
    object-fit: contain;
    border-radius: 10px;

`

const Floating2 = keyframes`

    0%{

        transform: translateY(50px);

    }

    50%{

        transform: translateY(45px);

    }


    100%{

        transform: translateY(50px);

    }

`

export const Arrow = styled(FiChevronDown)`

    animation: ${Floating2} 5s linear infinite;
    color: rgba(255, 215, 40);
    font-size: 3rem;
    transition: .04s;
    transform: translateY(50px);
    margin-bottom: 4%;
    
    @media (min-width: 500px){

        font-size: 4.25rem;

    }

    &:hover{

        transition: .4s;
        cursor: pointer;
        opacity: 0.6;

    }

    /* margin-top: 25%; */

`;
