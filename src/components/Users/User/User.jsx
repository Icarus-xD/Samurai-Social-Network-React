import { NavLink } from 'react-router-dom';
import profilePicture from '../../../assets/img/profile-picture.jpg';
import styles from './User.module.css';

const User = ({user, followingInProgress, onToggleFollow}) => {
  return (
    <li>
      <div>
        <NavLink to={`/profile/${user.id}`}>
          <img className={styles.userPicture} src={user.photos.small || profilePicture} alt='profile picture' />
        </NavLink>
        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => onToggleFollow(user.id, user.followed)}>{user.followed ? 'Unfollow' : 'Follow'}</button>
      </div>
      <div>
        <span>{user.name}</span>
        <span>{user.status}</span>
        <span>{`${'user.location.city'} ${'user.location.country'}`}</span>
      </div>
    </li>
  );
};

export default User;