import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginTC } from "../../store/actionCreators";
import LoginForm from "./LoginForm";

const Login = props => {

  const onSubmit = data => {
    props.login(data.email, data.password, data.remembered, data.captcha);
  };

  if (props.isAuth) {
    return <Navigate to={`/profile/${props.userId}`} />
  }

  return (
    <>
      <h2>Login</h2>
      <LoginForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
    </>
  );
};

const mapStateToProps = state => ({
  userId: state.auth.userId,
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, {
  login: loginTC,
})(Login);