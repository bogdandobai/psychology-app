import * as Types from '@src/store/state';
import { AuthState } from '@auth/store/reducers/auth.reducer';
import { createSelector } from 'reselect';

const getAuthState = (state: Types.RootState): AuthState => state.auth;

export const selectLoggingIn = createSelector(
    getAuthState,
    (state: AuthState) => {
        return state.loggingIn;
    },
);

export const selectVerifyingAuth = createSelector(
    getAuthState,
    (state: AuthState) => {
        return state.verifyingAuth
    }
)
