import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import UserContext from './UserContext'
import UserProfile from './components/UserProfile'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './components/Contact'

function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' }

  return (
    <UserContext.Provider value={userData}>
      <BrowserRouter>
        <Navbar />
        <UserProfile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
