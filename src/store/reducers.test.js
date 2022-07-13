import { deletePostAC, makePostAC } from "./actionCreators";
import { profileReducer } from "./reducers";

const initialState = {
  posts: [
    {id: 1, body: 'Hi', likes: 2},
    {id: 2, body: 'Hello', likes: 3},
    {id: 3, body: 'Privet', likes: 1},
  ],
};

it('length of posts should be incremented', () => {

  const action = makePostAC('some text');

  const newState = profileReducer(initialState, action);

  expect(newState.posts.length).toBe(4);
});

it('body of new post should be correct', () => {

  const action = makePostAC('some text');

  const newState = profileReducer(initialState, action);

  expect(newState.posts[3].body).toBe('some text');
});

it('length of posts after deleting should be decremented', () => {

  const action = deletePostAC(1);

  const newState = profileReducer(initialState, action);
  
  expect(newState.posts.length).toBe(2);
});

it('length of posts after deleting shouldn\'t be decremented if id is incorrect', () => {

  const action = deletePostAC(0);

  const newState = profileReducer(initialState, action);
  
  expect(newState.posts.length).toBe(3);
});