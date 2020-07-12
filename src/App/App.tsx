import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import Template from 'Template'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <Template />
      </Router>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default App
