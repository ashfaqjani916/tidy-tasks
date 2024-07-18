import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

import Tasks from './components/views/Tasks'
import Projects from './components/views/Projects'

import Welcome from './pages/Welcome'

function App() {
  return (
    <div className="flex w-screen">
      <Router>
        <Routes>
          {' '}
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
