import styled, { keyframes } from 'styled-components'

export const Section = styled.section`

    width: 94%;
    padding: 3.5% 3%;

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

export const SectionTitle = styled.h2`

    width: 100%;
    text-align: left;
    text-decoration: none;
    font-size: 1.75rem;
    text-transform: uppercase;
    background: linear-gradient(150deg, rgba(255, 215, 40), rgba(255, 255, 40), rgba(255, 215, 40), rgba(255, 255, 40));
    animation: ${Spinning} 20s linear infinite;
    transition: 5s;
    filter: drop-shadow(0px 0px 10px rgba(255, 215, 40));

    @media (min-width: 500px) {
        font-size: 2.25rem;
    }

`

export const Slider = styled.div`
  padding: 1% 0;
  display: flex;
  overflow-x: auto;
  gap: 15px;
  max-width: 98%;
`;