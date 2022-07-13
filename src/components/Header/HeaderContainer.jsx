import { connect } from 'react-redux';
import Header from './Header';
import { logoutTC } from '../../store/actionCreators';

const HeaderContainer = props => {

  return (
    <Header {...props} />
  );
};

const mapStateToProps = state => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  logout: logoutTC,
})(HeaderContainer);