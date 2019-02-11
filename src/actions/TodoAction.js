export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const GET_ALL_TODO = 'GET_ALL_TODO'

export const addNewTodo = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ADD_NEW_TODO,
      payload
    });
  };
}

export const getAllTodo = (payload) => {
    return (dispatch) => {
      dispatch({
        type: GET_ALL_TODO,
        payload
      });
    };
  }