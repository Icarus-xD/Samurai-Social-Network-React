const ProfileContact = props => {
  return (
    <li>
      <b>{props.title}: </b>
      {props.value || '-'}
    </li>
  );
};

export default ProfileContact;