import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/fieldValidators/validators';
import { Textarea } from '../../common/FormsControl/FormsControl';

const maxLength100 = maxLength(100);


const MakePostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field 
        component={Textarea}
        validate={[required, maxLength100]}
        name='newPostBody' 
        placeholder='Make new post' 
      />
      <button>Make Post</button>
    </form>
  );
};

export default reduxForm({form: 'MakePostForm'})(MakePostForm);