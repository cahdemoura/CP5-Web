import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  corFundo: '#f0f0f0',
  corTexto: 'black',
}

export const darkTheme = {
  corFundo: '#252525',
  corTexto: 'white',

}

export const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        background-color: ${props => props.theme.corFundo};
    }
`
export const PageColor = styled.div`
  background-color: ${lightTheme.corFundo};
  margin: 0 auto;
  max-width: 1024px;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  border:1px solid #525252;
  background-color: ${lightTheme.corFundo};
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;

  &:hover{
    color:  white;
    border:0;
    background-color: #ff7f2a;
    cursor: pointer;
  }

`
export const Button2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  border:1px solid #525252;
  background-color: ${lightTheme.corFundo};
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;

  &:hover{
    color:  white;
    border:0;
    background-color: #ff7f2a;
    cursor: pointer;
  }

`


export const NavMenu = styled.nav`
  background-color: ${lightTheme.corFundo};
  max-width: 1024px;
  padding:0 4px ;
  margin: 0 auto;
  display:flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  

  ul{
    display: flex;
  }

  li{
    list-style: none;
    
    }

  a{
    text-decoration: none;
    color: black;
    padding: 8px 16px;
    font-weight: 600;
  }
  a:hover{
    color:  white;
    background-color: #ff7f2a;
    border-radius: 8px;
  }    
`;

export const BlockDiv = styled.div`
  display: flex;
  background-color: #ffffff;
  max-width: 640px;
  border-radius: 8px;
  overflow:hidden ;
  box-shadow: 2px 5px 10px #cecece;

  &:hover{
    background-color: #e7e7e7;
    cursor: pointer;
  }

  img{
    max-width: 192px;
  }

  h1{
    color: #ff7f2a;
  }
  div{
    
    padding: 0 16px;
  }

`
export const Border = styled.div`
    border-bottom:2px solid #7e7e7e;
    width: auto;
`

export const Main = styled.main`
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
    background-color: ${lightTheme.corFundo};
  `

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 16px;
  margin-bottom: 40px;
`
export const BannerImg = styled.div`
position: relative;

img {
  width: 100%;
  height: auto;
  display: block;
}

div {
  position: absolute;
  top: 30%;
  left: 20px;
  width: 800px;
  text-align: left;
  color: white;
}`
