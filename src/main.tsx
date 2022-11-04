import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApiProvider } from './provider'
import AppRoutes from './routes/app.routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider>
      <AppRoutes />
    </ApiProvider>
  </React.StrictMode>
)
