// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme/theme.js';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle.jsx';
import 'normalize.css';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  // </StrictMode>,
);
