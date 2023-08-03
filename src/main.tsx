import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AppStore } from './contexts/AppStore.tsx'
import { MapStore } from './contexts/MapStore.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppStore>
        <MapStore>
            <App />
        </MapStore>
    </AppStore>
  </React.StrictMode>,
)
