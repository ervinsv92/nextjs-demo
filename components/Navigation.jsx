import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (

<nav className="navbar navbar-expand-lg bg-dark navbar-dark" >
<div className="container">
  <Link className="navbar-brand" href="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <Link className='nav-link' href='/'>Home</Link>
      </li>
      <li className="nav-item">
        <Link className='nav-link' href='/about'>About</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
  )
}

export default Navigation