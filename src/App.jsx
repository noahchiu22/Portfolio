import React, { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, useThemeMode } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const AppContent = () => {
  const { mode } = useThemeMode();

  const theme = useMemo(() => {
    const themeConfigs = {
      light: {
        primary: { main: '#6E57E0' },
        secondary: { main: '#6E57E0' },
        background: {
          default: '#FBFBFB',
          paper: '#ffffff',
        },
        text: {
          primary: '#6E57E0',
          secondary: '#757575',
        },
        divider: 'rgba(110, 87, 224, 0.1)',
      },
      dark: {
        primary: { main: '#90caf9' },
        secondary: { main: '#f48fb1' },
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#AAAAAA',
        },
        divider: 'rgba(110, 87, 224, 0.2)',
      },
      tech: {
        primary: { main: '#64ffda' },
        secondary: { main: '#ff64da' },
        background: {
          default: '#0a192f',
          paper: '#112240',
        },
        text: {
          primary: '#e6f1ff',
          secondary: '#8892b0',
        },
        divider: 'rgba(110, 87, 224, 0.2)',
      },
    };

    return createTheme({
      palette: {
        mode: mode === 'tech' ? 'dark' : mode,
        ...themeConfigs[mode],
      },
      typography: {
        fontFamily: '"Poppins", "Roboto", sans-serif',
        h1: {
          fontSize: '3rem',
          fontWeight: 700,
          color: themeConfigs[mode].text.primary,
        },
        h2: {
          fontSize: '2.25rem',
          fontWeight: 600,
          color: themeConfigs[mode].text.primary,
        },
        h3: {
          fontSize: '1.5rem',
          fontWeight: 500,
          color: themeConfigs[mode].text.primary,
        },
        subtitle1: {
          color: themeConfigs[mode].text.secondary,
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: '0.5rem',
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              padding: '0.75rem 1.25rem',
              '&:hover': {
                backgroundColor: mode === 'light' 
                  ? 'rgba(110, 87, 224, 0.08)'
                  : 'rgba(110, 87, 224, 0.2)',
              },
            },
            contained: {
              backgroundColor: '#6E57E0',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#5a46b8',
              },
            },
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: themeConfigs[mode].background.paper,
              borderBottom: `1px solid ${themeConfigs[mode].divider}`,
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              color: themeConfigs[mode].text.primary,
            },
          },
        },
      },
    });
  }, [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Home />} />
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App; 