import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeCrud from './Component/HomeCrud'
import CreateUser from './Component/CreateUser'
import User from './Component/User'
import EditUser  from './Component/EditUser'

export const App = () => {
  return (
    <div>
        <BrowserRouter>
          <HomeCrud/>
           <Routes>
              <Route path="/cuser" element={<CreateUser/>}/>
              <Route path="/" element={<User/>}/>
              <Route path="/e/:index" element={<EditUser/>}/>
           </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App