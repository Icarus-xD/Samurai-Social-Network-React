import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = props => {
  return (
    <header className={props.className}>
      <img className={styles.logo} src='https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png' alt='logo' />
      <div className={styles.login}>
        {props.isAuth ?
          <>
            <span>{props.login}</span>
            <button onClick={props.logout}>Log Out</button>
          </> : 
          <NavLink to={'/login'}>Log In</NavLink>}
      </div>
    </header>
  );
};

export default Header;