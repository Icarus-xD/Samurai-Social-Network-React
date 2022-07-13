import { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = props => {

  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return (
      <Preloader />
    );
  }

  const onSubmit = data => {
    props.setProfileInfo(data)
      .then(() => setEditMode(false));
  };

  return (
    <>
      {
        !editMode ?
          <ProfileData {...props} activateEditMode={() => setEditMode(true)} /> :
          <ProfileDataForm contacts={props.profile.contacts} initialValues={props.profile} onSubmit={onSubmit} />
      }
    </>
  );
};

export default ProfileInfo;