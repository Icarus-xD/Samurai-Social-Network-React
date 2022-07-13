import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; 

const initialProfileState = {
  profile: null,
  status: '',
  posts: [
    {id: 1, body: 'Hi', likes: 2},
    {id: 2, body: 'Hello', likes: 3},
    {id: 3, body: 'Privet', likes: 1},
  ],
};

export const profileReducer = (state = initialProfileState, action) => {
  
  switch (action.type) {

    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, {id: 5, body: action.post, likes: 0}],
      };

    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.id),
      };

    case 'SET_USER_PROFILE':
      return {
        ...state,
        profile: action.profile,
      };

    case 'SET_USER_STATUS':
      return {
        ...state,
        status: action.status,
      };

    case 'SET_PROFILE_PHOTO':
      return {
        ...state,
        profile: {...state.profile, photos: action.photos},
      };

    default:
      return state;
  };
};

const initialDialogsState = {
  interlocutors: [
    {id: 1, name: 'User 1'},
    {id: 2, name: 'User 2'},
    {id: 3, name: 'User 3'},
    {id: 4, name: 'User 4'},
    {id: 5, name: 'User 5'},
  ],
  messages: [
    {id: 1, text: 'Hi'},
    {id: 2, text: 'Hello'},
    {id: 3, text: 'Privet'},
  ],
}

export const dialogsReducer = (state = initialDialogsState, action) => {
  
  switch(action.type) {

    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, {id: 4, text: action.message}],
      };

    default:
      return state;
  };
};

const initialUsersState = {
  users: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

export const usersReducer = (state = initialUsersState, action) => {

  switch(action.type) {

    case 'SET_USERS':
      return {
        ...state,
        users: action.users,
      };

    case 'TOGGLE_FOLLOW_USER':
      return {
        ...state,
        users: state.users.map(user => user.id === action.userId ? {...user, followed: !user.followed} : user)
      };

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.page,
      };

    case 'SET_TOTAL_USER_COUNT':
      return {
        ...state,
        totalUserCount: action.count,
      };

    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case 'TOGGLE_FOLLOWING_PROGRESS':
      return {
        ...state,
        followingInProgress: (
          action.isFetching ? 
          [...state.followingInProgress, action.id] :
          state.followingInProgress.filter(id => id !== action.id)
        ),
      };

    default:
      return state;
  }
};

const initialAuthState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialAuthState, action) => {

  switch(action.type) {

    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload,
      };

    case 'SET_CAPTCHA_URL':
      return {
        ...state,
        captchaUrl: action.url,
      }
    
    default:
      return state;

  }
};

const initialAppState = {
  initialized: false,
};

const appReducer = (state = initialAppState, action) => {
  
  const stateCopy = Object.assign({}, state);

  switch(action.type) {

    case 'SET_INITIALIZED':
      stateCopy.initialized = true;
      return stateCopy;

    default:
      return stateCopy;
  }

};

const reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

export default reducers;