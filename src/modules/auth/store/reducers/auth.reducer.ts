import { ActionType, getType } from 'typesafe-actions';
import * as authActions from '@auth/store/actions/types';

export interface AuthState {
    loggingIn: boolean;
    loggingOut: boolean;
    verifyingAuth: boolean
}

const initialState: AuthState = {
    loggingIn: false,
    loggingOut: false,
    verifyingAuth: false
};

export type AuthActions = ActionType<typeof authActions>;

const authReducer = (
    state = initialState,
    action: AuthActions,
) => {
    switch (action.type) {
        case getType(authActions.Login): {
            return {
                ...state,
                loggingIn: true,
                error: false,
            };
        }
        case getType(authActions.LoginSuccess): {
            return {
                ...state,
                loggingIn: false,
                error: false,
            };
        }
        case getType(authActions.LoginFail): {
            return {
                ...state,
                loggingIn: false,
                error: true,
            };
        }
        case getType(authActions.VerifyAuth): {
            return {
                ...state,
                verifyingAuth: true,
                error: false,
            };
        }
        case getType(authActions.VerifyAuthSuccess): {
            return {
                ...state,
                verifyingAuth: false,
                error: false,
            };
        }
        case getType(authActions.VerifyAuthFail): {
            return {
                ...state,
                verifyingAuth: false,
                error: true,
            };
        }
        case getType(authActions.Logout): {
            return {
                ...state,
                loggingOut: true,
            };
        }

        case getType(authActions.LogoutSuccess): {
            return {
                ...state,
                loggingOut: false,
            };
        }

        case getType(authActions.LogoutFail): {
            return {
                ...state,
                loggingOut: false,
            };
        }
        default:
            return state;
    }
};

export default authReducer;
