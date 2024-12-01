import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <NextUIProvider>
    <BrowserRouter>
      <main className="light text-foreground bg-background">
        <App />
      </main>
    </BrowserRouter>
  </NextUIProvider>
)
