import styles from './Dialogs.module.css';
import Interlocutor from './Interlocutor/Interlocutor';
import Message from './Message/Message';
import SendMessageForm from './SendMessageForm';

const Dialogs = props => {

  const sendMessageHandler = values => {
    props.onSendMessage(values.newMessageBody);
  };

  return (
    <div className={styles.dialogs}>
      <ul className={styles.interlocutors}>
        {props.interlocutors.map(item => <Interlocutor key={item.id} id={item.id} name={item.name} />)}
      </ul>
      <div className={styles.dialog}>
        <ul className={styles.messages}>
          {props.messages.map(item => <Message key={item.id} text={item.text} />)}
        </ul>
        <SendMessageForm onSubmit={sendMessageHandler} />
      </div>
    </div>
  );
};

export default Dialogs;