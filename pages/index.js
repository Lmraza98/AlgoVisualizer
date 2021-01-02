import Head from "next/head";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import LinkedList from "../components/LinkedList";

import { useState } from "react";
const Main_container = styled.div`
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100vh;
  bottom: 0;
  transition: background-color 1000ms linear;

  background-color: ${(props) => props.theme.backgroundColor}
  color: ${(props) => props.theme.textColor}
  outline: none;
  box-shadow: none;
  // :focus {
  //   outline: none;
  // }
  // &:focus{
  //   outline: none;
  //   box-shadow: none;
  // }
`;
const Banner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;

  color: ${(props) => props.theme.textColor};
  font-size: 2em;
`;
const ModeButton = styled.button`
  margin: 1em;
  padding: .25em;
  width: 50px;
  color: ${(props) => props.theme.textColor}
  background-color: transparent;
  display: relative;
  outline: none;
  position: relative;
  top: 0;
  
  border: 2px solid ${(props) => props.theme.textColor}
  border-radius: 15px;
`;

export default function Home() {
  const [dark, setDark] = useState(false);

  const handleClick = (e) => {
    setDark(!dark);
  };

  return (
    <ThemeContext dark={dark}>
      <Main_container>
        <ModeButton onClick={handleClick}>{dark ? "light" : "dark"}</ModeButton>
        <Banner>Algorithm Visualizer</Banner>

        <LinkedList></LinkedList>
      </Main_container>
    </ThemeContext>
  );
}
