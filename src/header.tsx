import { Link } from 'react-router-dom'

function Header () {
  return (
    <header className='site-header'>
      <div className='site-identity'>
        <a href='/'>
          <span><img src='src/assests/f1_white.png' alt='Formula 1' /></span>
        </a>
      </div>
      <nav className='site-navigation'>
        <ul className='nav'>
          <li><Link to='/drivers'>Drivers</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
