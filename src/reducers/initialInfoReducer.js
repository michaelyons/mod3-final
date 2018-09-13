export const initialInfoReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_INITIAL_INFO':
    return action.info;
  default:
    return state;
  }
};
