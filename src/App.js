import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import BottomNav from './components/BottomNav/BottomNav'
import About from './pages/About'
import Chara from './pages/Chara'
import Loca from './pages/Loca'
import Obj from './pages/Obj'
import DetailChara from './pages/DetailChara'
import DetailLoca from './pages/DetailLoca'
import DetailObj from './pages/DetailObj'
import './App.css'

// import { createBrowserHistory } from 'history'

// const history = createBrowserHistory()

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/characters" element={<Chara />}></Route>
          <Route path="/locations" element={<Loca />} />
          <Route path="/objects" element={<Obj />}/>
          <Route path="/about" element={<About />} />
          <Route path="/DetailChara/:id" element={<DetailChara/>}></Route>
          <Route path="/DetailLoca/:id" element={<DetailLoca/>}></Route>
          <Route path="/DetailObj/:id" element={<DetailObj/>}></Route>
        </Routes>
        <footer>
          <BottomNav />
        </footer>
      </div>
    </Router>
  )
}

export default App
