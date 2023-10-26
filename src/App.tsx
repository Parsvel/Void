import '@mantine/core/styles.css';
import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';
import { Router } from './Router';
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { nprogress, NavigationProgress } from '@mantine/nprogress';
import '@mantine/nprogress/styles.css';

const myColor: MantineColorsTuple = [
  '#ffeee4',
  '#ffded0',
  '#f8baa2',
  '#f29671',
  '#ed7647',
  '#ea612d',
  '#ea561e',
  '#d04711',
  '#bb3d0c',
  '#a33204'
];

const theme = createTheme({
  colors: {
    myColor,
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
    <MantineProvider theme={{
      primaryColor: 'orange',
      colors: {
        'orange': [
          '#ffeee4',
          '#ffded0',
          '#f8baa2',
          '#f29671',
          '#ed7647',
          '#ea612d',
          '#ea561e',
          '#d04711',
          '#bb3d0c',
          '#a33204'
        ],
      },
    }}>
      <NavigationProgress />
      <Router />
    </MantineProvider>
  );
}
