import { mapKeys, omit } from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return omit(state, action.payload);
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
