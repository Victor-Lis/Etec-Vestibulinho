import styled, { keyframes } from "styled-components";
import { FiChevronDown } from 'react-icons/fi'

export const Container = styled.div`

    /* min-height: calc(70vh); */
    /* background: linear-gradient(40deg, #060606, #1e1e1e, #1e1e1e 20%, #060606); */
    /* background: #1e1e1e; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 50% 0; */
    height: 105vh;
    padding-bottom: 30vh;

    @media (min-width: 500px){
        
        height: 135vh;

    }

`

const Shadow = keyframes`

    0%{

        box-shadow: 0px 0px 10px 5px #fffa;

    }

    50%{

        box-shadow: 0px 0px 15px 10px #fffa;

    }

    100%{

        box-shadow: 0px 0px 10px 5px #fffa;

    }

`

export const Content = styled.div`

    background: linear-gradient(100deg, #1a1a1a 20%, #0f0f0f 20%, #1a1a1a 20%, #0f0f0f);
    padding: 0 8%;
    padding-top: 4.5%;
    padding-bottom: 6%;
    max-width: 300px;
    max-height: 280px;
    box-shadow: 0px 0px 5px 1px #fffa;
    border-radius: 20px;
    animation: ${Shadow} 5s ease-in-out linear;

    @media (min-width: 500px){

        height: 51%;
        padding: 0 5%;
        padding-top: 2.25%;
        max-width: 350px;
        /* padding-bottom: .05%; */

    }

`

export const ContentTitle = styled.h3`

    text-transform: uppercase;
    color: rgba(255, 215, 40);
    transform: translateX(-15px);

    @media (min-width: 500px){

        font-size: 1.30rem

    }

`

export const ContentDescription = styled.p`

    color: #fff;
    margin: 5px 0;
    margin-top: 15px;
    margin-bottom: 25px;


    @media (min-width: 500px){

        /* margin: 15px 0; */
        margin-top: 10px;
        margin-bottom: 35px;

    }

`

export const ContentEmphasis = styled.strong`

    color: rgba(255, 215, 40);
    font-size: 0.8rem;

`

const Floating = keyframes`

    0%{

        transform: translateY(12px);

    }

    50%{

        transform: translateY(-12px);

    }


    100%{

        transform: translateY(12px);

    }

`

export const SubscribeButton = styled.a`

    background: transparent;
    padding: 2.5% 3.5%;
    border: 2px solid rgba(255, 215, 40);
    text-transform: uppercase;
    /* color: rgba(255, 215, 40); */
    color: #fff;
    transition: 400ms;
    letter-spacing: 0.1em;
    font-weight: bold;
    text-decoration: none;

    &:hover{

        background: linear-gradient(150deg, rgba(255, 215, 40), rgba(255, 255, 40), rgba(255, 215, 40), rgba(255, 255, 40));
        cursor: pointer;
        animation: ${Floating} .2s infinite linear;
        transition: 400ms;
        box-shadow: 0px 0px 10px rgba(255, 215, 40);
        color: #1e1e1e;
        /* opacity: 0.6; */

    }

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
    margin-top: 2.5%;
    margin-bottom: 15%;
    
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
