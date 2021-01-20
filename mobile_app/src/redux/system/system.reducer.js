import * as types from './system.type';

const initialState = {
  showLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADING:
      return {
        ...state,
        showLoading: action.payload || false,
      };
    default:
      return state;
  }
};
