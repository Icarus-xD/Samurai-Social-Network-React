import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../utils/fieldValidators/validators';
import { Textarea } from '../common/FormsControl/FormsControl';

const maxLength100 = maxLength(100);

const SendMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field 
        component={Textarea}
        validate={[required, maxLength100]}
        name='newMessageBody' 
        placeholder='Enter your message'
      />
      <button>Send Message</button>
    </form>
  );
};

export default reduxForm({form: 'SendMessageForm'})(SendMessageForm);