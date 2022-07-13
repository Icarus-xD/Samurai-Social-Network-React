import User from './User/User';
import styles from './Users.module.css';

const Users = props => {

  return (
    <ul className={styles['users-list']}>
      {props.users.map(user => {
        return (
          <User 
            key={user.id}
            user={user} 
            followingInProgress={props.followingInProgress} 
            onToggleFollow={props.onToggleFollow} 
          />
        );
      })}
    </ul>
  );
};

export default Users;