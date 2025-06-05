import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { taskifyApi } from './store/api.js'
import { Provider } from 'react-redux'


 const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [taskifyApi.reducerPath]: taskifyApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
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
