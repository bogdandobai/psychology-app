import { Dispatch } from 'redux';
import * as Types from '@src/store/state';
import * as authActions from '@auth/store/actions/types';

// TODO Save the user returned by verifyAuth

export const launchApp = () => {
    return async (
        dispatch: Dispatch<Types.RootAction> | any,
        getState: () => Types.RootState,
    ) => {
        dispatch(authActions.VerifyAuth());
        try {
            // await authService.verifyAuth();
            dispatch(authActions.VerifyAuthSuccess());
        } catch (e) {
            dispatch(authActions.VerifyAuthFail());
        }
    };
};
