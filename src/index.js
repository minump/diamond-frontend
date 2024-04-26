import React from 'react';
import {render} from "react-dom";
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@mui/styles';
import reportWebVitals from './reportWebVitals.js';

import './index.css';
import {AppRoutes} from './routes.tsx';
import {theme} from './theme.ts';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AppRoutes/>
//   </React.StrictMode>
// );
render(

  <ThemeProvider theme={theme}>
    <AppRoutes/>
  </ThemeProvider>
	, document.getElementById("app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
