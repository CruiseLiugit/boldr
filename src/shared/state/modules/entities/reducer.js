import merge from 'lodash/merge';

const initialState = {
  posts: {},
  tags: {},
  comments: {},
  attachments: {},
  users: {},
  menus: {},
  menuDetails: {},
  settings: {},
};

export default function entitiesReducer(state = initialState, action) {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities);
  }
  return state;
}
