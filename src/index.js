import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppProviders from './context';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#32A041',
      black: '#1C1C1C',
      lightGray: '#8C8C8C',
    },
    secondary: {
      main: '#00420C',
    },
  },
  typography: {
    fontFamily: ['Fira Code'].join(','),
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppProviders>
        <App />
      </AppProviders>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
