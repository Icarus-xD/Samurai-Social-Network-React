import { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserStatusTC, setPhotoTC, setProfileTC,
  updateUserStatusTC, setProfileInfoTC } from '../../store/actionCreators';
import withRouter from '../../hoc/withRouter';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileContainer = props => {

  useEffect(() => {
    const userId = props.router.params.userId || props.userId;
    props.setUserProfile(userId);
    props.getUserStatus(userId);
  }, [props.router.params.userId]);

  return (
    <Profile 
      isOwner={!props.router.params.userId} 
      profile={props.profile} 
      status={props.status} 
      updateUserStatus={props.updateUserStatus} 
      setPhoto={props.setPhoto}
      setProfileInfo={props.setProfileInfo}
    />
  );
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
  status: state.profile.status,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default (
  compose(
    connect(mapStateToProps, { 
      setUserProfile: setProfileTC,
      getUserStatus: getUserStatusTC,
      updateUserStatus: updateUserStatusTC,
      setPhoto: setPhotoTC,
      setProfileInfo: setProfileInfoTC,
    }),
    withRouter,
    withAuthRedirect,
  )(ProfileContainer)
);