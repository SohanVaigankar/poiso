import { SIGN_IN, SIGN_OUT, AUTHENTICATED } from "./action.types";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        authenticated: true,
        userData: action.payload.userData,
      };
    case SIGN_OUT:
      return { ...state, authenticated: false, userData: {} };
    case AUTHENTICATED:
      return { ...state };
    default:
      return { ...state };
  }
};
