import { stopSubmit } from "redux-form";
import { getAuthData, getUserProfile, getUsers, 
  getUserStatus, login, logout, savePhoto,
  toggleFollowing, updateUserStatus, saveProfileInfo, getCaptcha } from "../api/api";

export const makePostAC = post => ({
  type: 'ADD_POST',
  post,
});

export const deletePostAC = id => ({
  type: 'DELETE_POST',
  id,
});

export const sendMessageAC = message => ({
  type: 'SEND_MESSAGE',
  message,
});

export const setCurrentPageAC = page => ({
  type: 'SET_CURRENT_PAGE',
  page,
});

const setUsersAC = users => ({
  type: 'SET_USERS',
  users,
});

const toggleFollowUserAC = userId => ({
  type: 'TOGGLE_FOLLOW_USER',
  userId,
});

const setTotalUserCountAC = count => ({
  type: 'SET_TOTAL_USER_COUNT',
  count,
});

const toggleIsFetchingAC = isFetching => ({
  type: 'TOGGLE_IS_FETCHING',
  isFetching,
});

const setUserProfileAC = profile => ({
  type: 'SET_USER_PROFILE',
  profile,
});

const setUserDataAC = (userId, email, login, isAuth) => ({
  type: 'SET_USER_DATA',
  payload: {userId, email, login, isAuth},
});

const toggleFollowingProgressAC = (id, isFetching) => ({
  type: 'TOGGLE_FOLLOWING_PROGRESS',
  id,
  isFetching,
});

const setUserStatusAC = status => ({
  type: 'SET_USER_STATUS',
  status,
});

const setInitializedAC = () => ({
  type: 'SET_INITIALIZED'
});

const setUserPhotoAC = photos => ({
  type: 'SET_PROFILE_PHOTO',
  photos,
});

const setCaptchaUrlAC = url => ({
  type: 'SET_CAPTCHA_URL',
  url,
});

export const getUsersTC = (currentPage, pageSize) => async dispatch => {
  
  dispatch(toggleIsFetchingAC(true));

  const data = await getUsers(currentPage, pageSize);
    
  dispatch(toggleIsFetchingAC(false));
  dispatch(setUsersAC(data.items));
  dispatch(setTotalUserCountAC(data.totalCount));
};

export const toggleFollowTC = (id, followed) => async dispatch => {

  dispatch(toggleFollowingProgressAC(id, true));

  const data = await toggleFollowing(id, followed);
  
  dispatch(toggleFollowingProgressAC(id, false))

  if (!+data.resultCode) {
    dispatch(toggleFollowUserAC(id));
  }
};

export const setProfileTC = id => async dispatch => {
  const data = await getUserProfile(id);
  
  dispatch(setUserProfileAC(data));
};

export const setAuthDataTC = () => async dispatch => {
  
  const data = await getAuthData()

  if (!+data.resultCode) {
    dispatch(setUserDataAC(data.data.id, data.data.email, data.data.login, true));
  }
};

export const getUserStatusTC = userId => async dispatch => {
  const data = await getUserStatus(userId)
    
  dispatch(setUserStatusAC(data));
};

export const updateUserStatusTC = status => async dispatch => {
  const data = await updateUserStatus(status)
    
  if (!+data.resultCode) {
    dispatch(setUserStatusAC(status));
  }
};

export const loginTC = (email, password, remembered, captcha) => async dispatch => {
  const data = await login(email, password, remembered, captcha);
  
  if (!+data.resultCode) {
    dispatch(setAuthDataTC());
  } else {

    if (data.resultCode === 10) {
      dispatch(getCaptchaTC());
    }

    const message = data.messages.length ? data.messages[0] : 'Some Error' 
    dispatch(stopSubmit('login', {_error: message}));
  }
};

export const logoutTC = () => async dispatch => {
  const data = await logout()
  
  if (!+data.resultCode) {
    dispatch(setUserDataAC(null, null, null, false));
  }
};

export const getCaptchaTC = () => async dispatch => {
  const data = await getCaptcha();

  dispatch(setCaptchaUrlAC(data.url));
}

export const initializeAppTC = () => async dispatch => {
  await dispatch(setAuthDataTC())
  dispatch(setInitializedAC());
};

export const setPhotoTC = file => async dispatch => {
  const data = await savePhoto(file);

  if (!+data.resultCode) {
    dispatch(setUserPhotoAC(data.photos));
  }
};

export const setProfileInfoTC = data => async (dispatch, getState) => {
  const response = await saveProfileInfo(data);
  const userId = getState().auth.userId;

  if (!+response.resultCode) {
    dispatch(setProfileTC(userId));
  } else {
    dispatch(stopSubmit('edit-profile', {_error: response.messages[0]}));
    return Promise.reject(response.messages[0]);
  }
};