import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>


          <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="/"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Available Features
    </a>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="/">
          UpperCase to LowerCase
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="/">
          LowerCase to UpperCase
        </a>
      </li>
      
      <li>
        <a className="dropdown-item" href="/">
          Text to Voice
        </a>
      </li>
    </ul>
  </li>


          <li className="nav-item">
            <a className="nav-link" href="/
            ">
              {props.about}
            </a>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  )
}



// prop --> properties
// proptypes prevent that only valid type would be eneterd
Navbar.propTypes ={title: PropTypes.string.isRequired,
                    about: PropTypes.string.isRequired
}


// default props , will help when we don't pass props
Navbar.defaultProps ={
    title: 'Set title',
    about:  'Set About'
}