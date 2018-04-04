import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action){
	switch (action.type){
		case DELETE_POST: // omit from lodash checks the state and omits any property that already exists in the state in its new state being returned
			return _.omit(state, action.payload);
		case FETCH_POST:
			// Using key interpolation to create a new property in the state object 
			// where the key is the ID and the data is the new post in order
			// to match the way you modeled your state using the lodash method below
			// .mapKeys()
			return {...state, [action.payload.data.id]: action.payload.data };
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state; 
	}
}