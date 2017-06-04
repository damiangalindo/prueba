// import _ from 'lodash'
import { FETCH_LIST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_LIST:
      return action.payload.data.genres;
    default:
      return state
  }
}
