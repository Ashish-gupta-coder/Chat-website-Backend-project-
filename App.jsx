import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Authinication/Login'
import Sign from './Authinication/Sign'

function App() {
  return (
<Routes>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Sign/>}/>
</Routes>
  )
}

export default App
