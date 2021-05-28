import React from 'react';
import './App.css';
import UserDetails from './components/DisplayUsername';
import { EditUser } from './components/EditUser';
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/core';
import ThemeToggler from './ThemeToggler';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      <ThemeToggler />
      <UserDetails/>
      <EditUser/>
    </ColorModeProvider>
  </ThemeProvider>

  );
};

export default App;


