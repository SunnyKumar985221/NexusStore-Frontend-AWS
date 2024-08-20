import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/global.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='sign-up' element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
