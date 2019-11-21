import _ from 'lodash';
import { CREATE_HOST, FETCH_HOSTS, FETCH_HOST } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HOST:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HOST:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_HOSTS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
};
