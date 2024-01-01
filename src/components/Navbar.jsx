import { Link } from 'react-router-dom'

import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={`/`}>Chat</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar