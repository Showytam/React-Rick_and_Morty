import { NavLink } from 'react-router-dom'
import Favorite from '../Favorite/Favorite'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/character/?page=1'>People</NavLink>
        </li>
        <li>
          <NavLink to='/not-found'>Not Found</NavLink>
        </li>
        <li>
          <NavLink to='/memes'>Memes</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  )
}

export default Header
