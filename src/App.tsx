import '@mantine/core/styles.css';
import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';
import { Router } from './Router';
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { nprogress, NavigationProgress } from '@mantine/nprogress';
import '@mantine/nprogress/styles.css';

const voidOrange: MantineColorsTuple = [
  '#fff4e2',
  '#ffe7cc',
  '#ffcf9b',
  '#ffb464',
  '#fe9d38',
  '#fe8f1b',
  '#ff8809',
  '#e47500',
  '#cb6700',
  '#b05700'
];

const theme = createTheme({
  colors: {
    voidOrange,
  }
});

export default function App() {
  const [prevLoc, setPrevLoc] = useState("")

  useEffect(() => {
    setPrevLoc(location.pathname)
    nprogress.start()
    if (location.pathname === prevLoc) {
      setPrevLoc('')
    }
  }, [location])

  useEffect(() => {
    nprogress.complete()
  }, [prevLoc])
  
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <NavigationProgress />
      <Router />
    </MantineProvider>
  );
}
