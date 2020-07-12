import React, { ReactElement } from 'react'
import { StylesProvider, StylesOptions } from '@material-ui/styles'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

const generateClassName: StylesOptions['generateClassName'] = (rule, sheet) =>
  `${sheet?.options.classNamePrefix ?? 'classname'}-${rule.key}`

type Props = {
  children: ReactElement | ReactElement[]
}

const Theme = ({ children }: Props) => (
  <StylesProvider generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
)

export default Theme
