import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  let { mode, toggle } = props

  return (
    <div>
      <nav className={`navbar navbar-expand-lg fixed-top bg-${mode}`}>
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-${
              mode === 'light' ? 'black' : 'white'
            }`}
            to="/"
          >
            News Sansar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-Link active text-${
                    mode === 'light' ? 'black' : 'white'
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-Link text-${
                    mode === 'light' ? 'black' : 'white'
                  } mx-3`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-Link text-${
                    mode === 'light' ? 'black' : 'white'
                  } mx-3`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-Link text-${
                    mode === 'light' ? 'black' : 'white'
                  } mx-3`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-Link text-${
                    mode === 'light' ? 'black' : 'white'
                  } mx-3`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-Link text-${
                    mode === 'light' ? 'black' : 'white'
                  } mx-3`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={toggle}
          />
          <label
            className={`form-check-label text-${
              mode === 'light' ? 'black' : 'white'
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            {mode === 'light' ? 'Dark' : 'Light'} Mode
          </label>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
