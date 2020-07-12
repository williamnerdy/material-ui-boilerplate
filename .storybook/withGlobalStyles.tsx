import React from 'react';
import { StoryFn } from '@storybook/addons';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/global';
import theme from '../src/styles/theme';

const withGlobalStyles = (storyFn: StoryFn) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </MuiThemeProvider>
);

export default withGlobalStyles;
