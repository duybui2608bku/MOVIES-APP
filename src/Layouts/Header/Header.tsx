import './Header.scss'
import logoNetflix from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
const Header = () => {
  const location = useLocation()
  const header = [
    {
      display: 'Home',
      path: '/'
    },
    {
      display: 'Movies',
      path: '/movies'
    },
    {
      display: 'TV Series',
      path: '/tvseries'
    }
  ]

  return (
    <>
      <div className='header-container'>
        <div className='logo'>
          <img src={logoNetflix} alt='logo' />
        </div>
        <div className='function'>
          {header.map((item, index) => {
            return (
              <>
                <Link className={location.pathname === item.path ? 'active' : ''} key={index} to={item.path}>
                  {item.display}
                </Link>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Header
