import { reduxForm, Field } from "redux-form";
import { maxLength, required } from "../../utils/fieldValidators/validators";
import { Input } from "../common/FormsControl/FormsControl";
import styles from '../common/FormsControl/FormsControl.module.css';

const maxLength30 = maxLength(30);

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field 
        component={Input}
        validate={[required, maxLength30]} 
        type='text' 
        name='email' 
        placeholder='Email'
      />
      <Field 
        component={Input}
        validate={[required]} 
        type='password' 
        name='password' 
        placeholder='Password'
      />
      {
        props.captchaUrl &&
        <div>
          <img src={props.captchaUrl} />
          <Field component={Input} validate={[required]} type='text' name='captcha' placeholder='Characters from Picture' />
        </div>
      }
      <Field
        component={Input}
        id='remembered'
        type='checkbox'
        name='remembered'
      />
      <Field 
        component='label' 
        htmlFor='remembered' 
        name='rememberedLabel'
      >
        Remember Me
      </Field>
      {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
      <button disabled={false}>Log In</button>
    </form>
  );
};

export default reduxForm({form: 'login'})(LoginForm);