import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'f98fb86f-55ae-46f8-bb69-454f4d228fb5',
  },
});



export const getUsers = (pageNumber = 1, pageSize = 10) => {
  return (
    instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then(response => response.data)
  );
};

export const getAuthData = () => {
  return (
    instance
      .get(`auth/me`)
      .then(response => response.data)
  );
};

export const login = (email, password, remembered = false, captcha) => {
  return (
    instance
      .post('auth/login', { email, password, remembered, captcha})
      .then(response => response.data)
  );
};

export const logout = () => {
  return (
    instance
      .delete('auth/login')
      .then(response => response.data)
  );
};

export const getCaptcha = () => {
  return (
    instance
      .get('security/get-captcha-url')
      .then(response => response.data)
  );
};

export const getUserProfile = userId => {
  return (
    instance
      .get(`profile/${userId}`)
      .then(response => response.data)
  );
};

export const savePhoto = file => {

  const formData = new FormData();
  formData.append('image', file);

  return (
    instance
      .put('profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => response.data.data)
  );
};

export const saveProfileInfo = data => {
  return (
    instance
      .put('profile', data)
      .then(response => response.data)
  );
};

export const getUserStatus = userId => {
  return (
    instance
      .get(`profile/status/${userId}`)
      .then(response => response.data)
  );
};

export const updateUserStatus = status => {
  return (
    instance
      .put(`profile/status`, {
        status,
      })
      .then(response => response.data)
  );
};

export const toggleFollowing = (id, followed) => {
  if (!followed) {
    return(
      instance
        .post(`follow/${id}`, {})
        .then(response => response.data)
    );
  } else {
    return (
      instance
        .delete(`follow/${id}`)
        .then(response => response.data)
    );
  }
};