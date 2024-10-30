import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

import Tasks from './components/views/Tasks'
import Projects from './components/views/Projects'

import Welcome from './pages/Welcome'

import RequireAuth from './components/RequireAuth'

function App() {
  return (
    <div className="flex w-screen">
      <Router>
        <Routes>
          {' '}
          <Route path="/login" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/welcome" element={<Welcome />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
