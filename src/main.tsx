import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import './assets/css/tailwind.css'

createRoot(document.getElementById('root')!).render(
  <NextUIProvider>
    <BrowserRouter>
      <main className="light text-foreground bg-background">
        <App />
      </main>
    </BrowserRouter>
  </NextUIProvider>
)
