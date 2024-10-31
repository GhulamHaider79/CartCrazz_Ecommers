import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AppProvide} from './context/ProductsContext.jsx'
import {FilterContextProvider} from './context/filterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvide>
      <FilterContextProvider>
    <App />
    </FilterContextProvider>
    </AppProvide>
  </StrictMode>,
)
