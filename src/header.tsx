import { Link } from 'react-router-dom'

function Header () {
  return (
    <header className='site-header'>
      <div className='site-identity'>
        <Link to='/'>
          <span><img src='src/assests/f1_white.png' alt='Formula 1' /></span>
        </Link>
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
