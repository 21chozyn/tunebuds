
import React from 'react'
import './App.scss'
import Home from "./Components/Home"
import store from "./Store/index";
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
     <Home/>
    </Provider>
  )
}

export default App
