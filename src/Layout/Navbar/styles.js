import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  width: 100%;
  position: sticky;
  top: 0px;
  background: linear-gradient(90deg, #090909, #1f1f1f 20%, #090909, #1f1f1f);
  overflow: hidden;
`

export const Logo = styled.img` 
  height: 24px;
  width: 50px;
  margin-left: 20px;
  aspect-ratio: 3/4;
  @media (min-width: 500px){

    width: 100px;
    height: 40px;

  }
`

export const HeaderNav = styled.nav`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  max-width: 400px;
  height: 100%;
  margin: 0 2.5px;

  @media (min-width: 500px){

    max-width: 500px;

  }
`

export const HeaderNavLink = styled(Link)`
  text-decoration: none;
  font-size: .8rem;
  text-transform: uppercase;
  text-align: center;
  height: 100%;
  padding: 0px 10px;
  margin: 0px 2.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 400ms;
  color: #9933ff;

    &:hover{

      cursor: pointer;
      transition: 40ms;
      border-bottom: 7.5px solid #9933ff;

    }

    @media (min-width: 500px){

      font-size: 1.1rem;

    }

`

export const HeaderSubscribeButton = styled.a`
  /* color: #9933ff; */
  height: 25px;
  width: 100%;
  border: 1px solid rgb(86, 0, 199);
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  transition: 400ms;
  letter-spacing: 0.1em;
  margin-right: 10px;
  font-size: .6rem;
  max-width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fffa;

    &:hover{

      cursor: pointer;
      transition: 400ms;
      background: rgb(86, 0, 199);
      color: white;
      box-shadow: 0px 0px 20px rgb(46, 0, 106);

    }

    @media (min-width: 500px){

      font-size: 1rem;
      max-width: 150px;
      height: 30px;

    }

`