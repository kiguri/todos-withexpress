import { authActionType } from '../constant/auth.constant';

export const authReducer = (state, action) => {
  switch (action.type) {
    case authActionType.LOGIN:
    case authActionType.SIGN_UP:
      return {
        loading: true,
      };
    case authActionType.LOGOUT:
      return {};
    default:
      return state;
  }
};
