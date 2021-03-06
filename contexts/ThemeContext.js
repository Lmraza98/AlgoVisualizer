import React from 'react'
import { ThemeProvider } from 'styled-components'

const bgColor = {
    dark: '#03254c;',
    light: '#fdfcfc;',
}
const nodeColor = {
    dark: '#ef7564;',
    light: '#d3d3d3;',
}

const textColor = {
    dark: '#fdfcfc;',
    light: '#03254c;',
}

const theme = (darkMode) => {
    return darkMode
        ? {
              backgroundColor: bgColor.dark,
              nodeColor: nodeColor.dark,
              textColor: textColor.dark,
              darkBackgroundColor: bgColor.dark,
              darkNodeColor: nodeColor.dark,
              darkTextColor: textColor.dark,
          }
        : {
              backgroundColor: bgColor.light,
              nodeColor: nodeColor.light,
              textColor: textColor.light,
              darkBackgroundColor: bgColor.dark,
              darkNodeColor: nodeColor.dark,
              darkTextColor: textColor.dark,
          }
}

const ThemeContext = (props) => {
    return (
        <ThemeProvider theme={theme(props.dark)}>
            {props.children}
        </ThemeProvider>
    )
}

export { ThemeContext }
