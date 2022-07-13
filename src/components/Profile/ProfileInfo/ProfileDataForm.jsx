import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../common/FormsControl/FormsControl";
import styles from '../../common/FormsControl/FormsControl.module.css';

const ProfileDataForm = props => {

  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <b>Nickname: </b>
          <Field component={Input} name='fullName' type='text' placeholder='Enter New Nickname' />
        </div>
        <div>
          <div>
            <b>Looking for a Job: </b>
            <Field component={Input} name='lookingForAJob' type='checkbox' />
          </div>
          <div>
            <b>Professional Skills: </b>
            <Field component={Textarea} name='lookingForAJobDescription' placeholder='Write about your professional skills' />
          </div>
        </div>
        <div>
          <b>About Me: </b>
          <Field component={Input} name='aboutMe' type='text' placeholder='Write about yourself' />
        </div>
        <div>
          <b>Contacts: </b>
            <ul>
              {
                Object.keys(props.contacts)
                  .map(key => {
                    return (
                      <li key={key}>
                        {key}
                        <Field component={Input} name={`contacts.${key}`} type='text' placeholder={`Link to your ${key}`} />
                      </li>
                    );
                  })
              }
            </ul>
        </div>
        {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
        <button>Finish Editing</button>
      </form>
  );
};

export default reduxForm({form: 'edit-profile'})(ProfileDataForm);