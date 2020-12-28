import Head from 'next/head'
import styled from 'styled-components'
import { ThemeContext } from '../contexts/ThemeContext'
const Main = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.backgroundColor}
  color: ${(props) => props.theme.textColor}
`
const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;

  color: ${(props)=> props.theme.textColor}
  size: 2em;
`

export default function Home() {
  return (
   <ThemeContext>
     <Header>Algorithm Visualizer</Header>
     <Main>

     </Main>
   </ThemeContext>
  )
}
