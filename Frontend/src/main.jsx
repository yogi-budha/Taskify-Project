import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { taskifyApi } from './store/api.js'
import { Provider } from 'react-redux'


 const store = configureStore({
  reducer: {
    [taskifyApi.reducerPath]: taskifyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskifyApi.middleware),
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>

      <StrictMode>
    <App />
  </StrictMode>,
  </Provider>

)
