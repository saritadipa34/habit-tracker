import React from 'react'
import Home from './components/Home'
import YourHabits from './components/YourHabits'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

const App = () => {

  return (
    <>
    <Router>
      <Routes>
    <Route  path="/" element={<Home />} />
    <Route  path="/yourhabits" element={<YourHabits />}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
