import styles from './ProfileData.module.css';
import ProfileStatus from './ProfileInfoComponents/ProfileStatus';
import profilePicture from '../../../assets/img/profile-picture.jpg';
import ProfileContact from './ProfileInfoComponents/ProfileContact';

const ProfileData = props => {

  const contacts = Object.keys(props.profile.contacts)
    .filter(key => !!props.profile.contacts[key]);

  const onProfilePictureSelected = event => {
    if (event.target.files.length) {
      props.setPhoto(event.target.files[0]);
    }
  };

  return (
    <div className={styles.description}>
        <img src={props.profile.photos.large || profilePicture} className={styles.profilePicture} alt='avatar' />
        {props.isOwner && <input type='file' onChange={onProfilePictureSelected} />}
        <ProfileStatus status={props.status}  updateUserStatus={props.updateUserStatus} />
        <div>
          <b>Nickname: </b>
          {props.profile.fullName}
        </div>
        <div>
          <div>
            <b>Looking for a Job: </b>
            {props.profile.lookingForAJob ? 'Yes' : 'No'}
          </div>
          {
            props.profile.lookingForAJob && 
            <div>
              <b>Professional Skills: </b>
              {props.profile.lookingForAJobDescription}
            </div>
          }
        </div>
        <div>
          <b>About Me: </b>
          {props.profile.aboutMe}
        </div>
        <div>
          <b>Contacts: </b>
          {contacts.length ?
            <ul>
              {
                contacts
                  .map(key => <ProfileContact key={key} title={key} value={props.profile.contacts[key]} />)
              }
            </ul> :
            'No Contacts'
          }
        </div>
        {props.isOwner && <button onClick={props.activateEditMode}>Edit Profile</button>}
      </div>
  );
};

export default ProfileData;