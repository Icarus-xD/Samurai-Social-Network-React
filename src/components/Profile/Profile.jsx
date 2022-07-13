import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = props => {
  return (
    <>
      <ProfileInfo 
        isOwner={props.isOwner} 
        profile={props.profile} 
        status={props.status} 
        updateUserStatus={props.updateUserStatus} 
        setPhoto={props.setPhoto}
        setProfileInfo={props.setProfileInfo}
      />
      <MyPostsContainer />
    </>
  );
};

export default Profile;