import { NavLink } from "react-router-dom";
import styles from './Interlocutor.module.css';

const Interlocutor = props => {
  return (
    <li className={styles.interlocutor}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </li>
  );
};

export default Interlocutor;