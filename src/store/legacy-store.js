import { profileReducer, dialogsReducer } from "./reducers";

const store = {
  _state: {
    profile: {
      posts: [
        {id: 1, message: 'Hi', likes: 2},
        {id: 2, message: 'Hello', likes: 3},
        {id: 3, message: 'Privet', likes: 1},
      ],
      newPostText: '',
    },
    dialogs: {
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
      newMessageText: '',
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
  
    this._callSubscriber(this._state);
  },
};

export default store;