import { connect } from 'react-redux';
import Dialogs from "./Dialogs";
import { sendMessageAC } from "../../store/actionCreators";
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = state => {
  return {
    interlocutors: state.dialogs.interlocutors,
    messages: state.dialogs.messages,
    newMessageText: state.dialogs.newMessageText,
  };
};


export default (
  compose(
    connect(mapStateToProps, {
      onSendMessage: sendMessageAC,
    }),
    withAuthRedirect,
  )(Dialogs)
);