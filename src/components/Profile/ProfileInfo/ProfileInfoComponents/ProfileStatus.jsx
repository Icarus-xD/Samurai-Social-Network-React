import { useEffect, useState } from "react";

const ProfileStatus = props => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const toggleEditMode = () => {
    setEditMode(prevState => {
      if (prevState) {
        props.updateUserStatus(status);
      }
      return !prevState;
    });
  };

  const onStatusChange = event => {
    setStatus(event.target.value);
  };
  
  return (
    <div>
      {
        !editMode ? 
          <span onDoubleClick={toggleEditMode}><b>{status || 'Set Status'}</b></span> :
          <input value={status} autoFocus={true} onChange={onStatusChange} onBlur={toggleEditMode} />
      }
    </div>
  );
};

export default ProfileStatus;