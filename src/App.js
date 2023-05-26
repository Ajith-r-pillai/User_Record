import React from 'react'
import { Route,Routes } from 'react-router-dom';
import'./App.css'
import Admin from './components/Admin'
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <div>
         <Routes>
        <Route path='/' element={<Admin/>}></Route>
        <Route path='add' element={<Add/>}></Route>
        <Route path='edit/:id' element={<Edit/>}></Route>
        </Routes>
    </div>
  )
}

export default App
