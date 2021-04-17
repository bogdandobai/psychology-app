import { Dispatch } from 'redux';
import * as Types from '@src/store/state';
import * as authActions from './types';
import * as authService from '@auth/services/auth.service';


export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<Types.RootAction | any>) => {
    try {
      dispatch(authActions.Login());
      const token = await authService.login(email, password);
      dispatch(authActions.LoginSuccess());
      await authService.storeTokens(token);
    } catch (e) {
      return dispatch(authActions.LoginFail(e));
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<Types.RootAction>) => {
    dispatch(authActions.Logout());
    try {
      await authService.logout();
      dispatch(authActions.LogoutSuccess());
    } catch (e) {
      dispatch(authActions.LogoutFail(e));
    }
  };
};
