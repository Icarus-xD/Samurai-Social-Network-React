import styles from './Message.module.css';

const Message = props => {
  return (
    <li className={styles.message}>{props.text}</li>
  );
};

export default Message;