export const initialState = {
  user: null,
  doctors: null,
};
export const actionTypes = {
  SET_USER: 'SET_USER',
  ADD_DOCTORS: 'ADD_DOCTORS',
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.ADD_DOCTORS:
      return {
        ...state,
        doctors: action.doctors,
      };
    default:
      return state;
  }
};
export default reducer;
