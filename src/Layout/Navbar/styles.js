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
  background: linear-gradient(90deg, #060606, #1e1e1e 20%, #060606, #1e1e1e);
  overflow: hidden;
`

export const Logo = styled.img`
  width: 80px;
  height: 18px;
  /* background: #fff; */
  margin-left: 10px;
  aspect-ratio: 3/4;
  /* flex: 1; */
`

export const HeaderNav = styled.nav`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 400px;
  height: 100%;
  margin: 0 2.5px;
`

export const HeaderNavLink = styled(Link)`
  text-decoration: none;
  font-size: .8rem;
  text-transform: uppercase;
  text-align: center;
  height: 100%;
  padding: 0px 10px;
  margin: 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 400ms;
  color: rgb(136, 0, 219);

    &:hover{

      cursor: pointer;
      transition: 40ms;
      border-bottom: 7.5px solid rgb(86, 0, 199);

    }

`

export const HeaderSubscribeButton = styled.a`
  color: rgb(136, 0, 219);
  /* height: 35px; */
  width: 100%;
  border: 1px solid rgb(86, 0, 199);
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  transition: 400ms;
  letter-spacing: 0.1em;
  margin-right: 10px;
  font-size: .6rem;
  padding: 1.5% 1%;
  max-width: 80px;

    &:hover{

      cursor: pointer;
      transition: 400ms;
      background: rgb(86, 0, 199);
      color: white;
      box-shadow: 0px 0px 20px rgb(46, 0, 106);

    }
`