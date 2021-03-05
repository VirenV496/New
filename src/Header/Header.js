import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav>
          <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/FormA">Form1</Link>
                </li>
                <li>
                  <Link to="/FormB">Form2</Link>
                 </li>
          </ul>
        </nav>

    )
}

export default Header;
