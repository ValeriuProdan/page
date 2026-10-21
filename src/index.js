import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { routerFuture } from './routerFuture';
console.log('%c👋 Curious? A different career lives at /alternate-universe', 'font-size:14px;color:#c9a962');
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter future={routerFuture}><App /></BrowserRouter></React.StrictMode>);
