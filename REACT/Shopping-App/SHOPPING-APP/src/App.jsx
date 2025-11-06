import React from 'react'
import {BrowserRouter} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/login" element={<h1>Login Here</h1>}/>
        <Route path="/register" element={<h1>Home Page</h1>}/>
        <Route path="/cart" element={<h1>View Cart</h1>}/>
        <Route path="/order" element={<h1>View Orders</h1>}/>
        <Route path="*" element={<h1>404 Page</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App