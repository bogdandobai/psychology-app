import { createAction } from 'typesafe-actions';

const VERIFY_AUTH = '[Auth] Verify Auth';
const VERIFY_AUTH_SUCCESS = '[Auth] Verify Auth Success';
const VERIFY_AUTH_FAIL = '[Auth] Verify Auth Fail';

const AUTH_LOGIN = '[Auth] Login';
const AUTH_LOGIN_SUCCESS = '[Auth] Login Success';
const AUTH_LOGIN_FAIL = '[Auth] Login Fail';

const LOG_OUT = '[Auth] Logout';
const LOG_OUT_SUCCESS = '[Auth] Logout Success';
const LOG_OUT_FAIL = '[Auth] Logout Fail';

export const VerifyAuth = createAction(VERIFY_AUTH)<void>();
export const VerifyAuthSuccess = createAction(VERIFY_AUTH_SUCCESS)<void>();
export const VerifyAuthFail = createAction(VERIFY_AUTH_FAIL)<void>();

export const Login = createAction(AUTH_LOGIN)<void>();
export const LoginSuccess = createAction(AUTH_LOGIN_SUCCESS)<void>();
export const LoginFail = createAction(
    AUTH_LOGIN_FAIL,
    (error: string) => error,
)<string>();


export const Logout = createAction(LOG_OUT)<void>();
export const LogoutSuccess = createAction(LOG_OUT_SUCCESS)<void>();
export const LogoutFail = createAction(LOG_OUT_FAIL)<void>();
