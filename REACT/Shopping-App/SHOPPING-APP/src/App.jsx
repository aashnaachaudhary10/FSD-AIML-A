import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import UserDashboard from './pages/UserDashboard'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserDashboard/>}>
        <Route path="cart" element={<h1>View Cart</h1>}/>
        <Route path="order" element={<h1>View Orders</h1>}/>
        </Route>
        <Route path="/login" element={<h1>Login Here</h1>}/>
        <Route path="/register" element={<h1>Register here</h1>}/>
        
        <Route path="*" element={<h1>404 page</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App