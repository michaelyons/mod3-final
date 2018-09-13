export const membersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_SWORN_MEMBERS':
      return [...action.members];
    default:
      return state;
  }
}