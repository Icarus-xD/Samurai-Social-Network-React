import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = props => {
  return (
    <nav className={props.className}>
        <ul className={styles['nav-list']}>
          <li className={styles['nav-item']}>
            <NavLink to='/profile' className={data => data.isActive ? styles.active : styles['nav-link']}>Profile</NavLink>
          </li>
          <li className={styles['nav-item']}>
            <NavLink to='/dialogs' className={data => data.isActive ? styles.active : styles['nav-link']}>Messages</NavLink>
          </li>
          <li className={styles['nav-item']}>
            <NavLink to='/users' className={data => data.isActive ? styles.active : styles['nav-link']}>Users</NavLink>
          </li>
          <li className={styles['nav-item']}>
            <NavLink to='/news' className={data => data.isActive ? styles.active : styles['nav-link']}>News</NavLink>
          </li>
          <li className={styles['nav-item']}>
            <NavLink to='/music' className={data => data.isActive ? styles.active : styles['nav-link']}>Music</NavLink>
          </li>
          <li className={styles['nav-item']}>
            <NavLink to='/settings' className={data => data.isActive ? styles.active : styles['nav-link']}>Settings</NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;