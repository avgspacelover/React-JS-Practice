import React from 'react';
import * as  ReactDOMClient from 'react-dom/client';

import './index.css';
import App from './App';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(

    <App />

);

// export NODE_OPTIONS=--openssl-legacy-provider

// "start": "react-scripts --openssl-legacy-provider start"