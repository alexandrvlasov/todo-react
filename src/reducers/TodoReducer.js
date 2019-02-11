import { ADD_NEW_TODO, GET_ALL_TODO } from '../actions/TodoAction';

const INITIAL_STATE = {
  todo: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return { ...state, todo: action.payload };
    case GET_ALL_TODO:
      return { ...state, todo: action.payload };
    default:
      return state;
  }
};
