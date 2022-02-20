import React from 'react'

const Nav = () => {
  return (
    <nav className='navbar'>
     <div className='container'>
      <ul className='navbar__left'>
        <div className='navbar__left-logo'>
          <img src='./images/logo.png' alt='logo' />
        </div>
      </ul>
      <ul className='navbar__right'>
        <li>
            <a href='#home'>Home</a>
        </li>
        <li>
            <a href='#About'>About</a>
        </li>
        <li>
            <a href='#formation'>Formation</a>
        </li>
        <li>
            <a href='#Maps'>Maps</a>
        </li>
        <li>
            <a href='#Contact'>Contact</a>
        </li>
        <li>
          <button type="button" class="btn btn-danger">Connexion</button>
        </li>

      </ul>
     </div>
        
    </nav>
  )
}

export default Nav