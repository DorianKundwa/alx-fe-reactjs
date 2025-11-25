import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '12px', padding: '12px', backgroundColor: '#1f2937', color: 'white' }}>
      <Link to="/" style={{ color: 'white' }}>Home</Link>
      <Link to="/about" style={{ color: 'white' }}>About</Link>
      <Link to="/services" style={{ color: 'white' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
    </nav>
  )
}

export default Navbar
