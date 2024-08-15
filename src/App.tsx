import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/global.scss';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
