import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { storesContext } from './mobx/index.ts';
import counterStore from './mobx/counterStore.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <storesContext.Provider value={{ counterStore: counterStore }}>
        <App />
      </storesContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
