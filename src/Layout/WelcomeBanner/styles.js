import styled, { keyframes } from "styled-components";
import { FiChevronDown } from 'react-icons/fi'

export const Container = styled.div`

    /* min-height: calc(70vh); */
    /* background: linear-gradient(150deg, #060606, #1e1e1e, #1e1e1e 20%, #060606); */
    background: #1e1e1e;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* padding: 50% 0; */
    height: 85vh;
    padding-bottom: 20vh;

    @media (min-width: 500px){
        
        height: 110vh;

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

export const Message = styled.h2`

    margin-top: 10%;
    text-decoration: none;
    font-size: 1.15rem;
    text-transform: uppercase;
    text-align: center;
    background: linear-gradient(150deg, rgba(255, 215, 40), rgba(255, 255, 40), rgba(255, 215, 40), rgba(255, 255, 40));
    animation: ${Spinning} 20s linear infinite;
    transition: 5s;

    @media (min-width: 500px) {
        margin-top: 0%;
        font-size: 2.25rem;
    }

`

const Floating = keyframes`

    0%{

        transform: translateY(5px);

    }

    50%{

        transform: translateY(-5px);

    }


    100%{

        transform: translateY(5px);

    }

`

export const Arrow = styled(FiChevronDown)`

    animation: ${Floating} 5s linear infinite;
    color: rgba(255, 215, 40);
    font-size: 3rem;
    transition: .04s;
    margin-bottom: 10%;
    
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