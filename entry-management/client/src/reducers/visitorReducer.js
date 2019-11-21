import _ from 'lodash';
import { DELETE_VISITOR, VISIT_HOST, FETCH_VISITOR } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VISITOR:
      return { ...state, [action.payload.id]: action.payload };
    case VISIT_HOST:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_VISITOR:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
