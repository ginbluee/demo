import * as types from './user.type';

const initialState = {
  isLogin: false,
  account: {},
  language: 'en',
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case types.GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLogin: true,
        account: payload,
      };
    case types.LOG_OUT:
      return {
        ...state,
        isLogin: false,
        account: {},
      };
    default:
      return state;
  }
};
