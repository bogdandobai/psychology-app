import Api from '../../../services/api';
import {Token} from "@src/types/interfaces";
import LocalStorageManager from "@src/services/local-storage.service";
import {TOKENS} from "@src/transforms/constants";
import AsyncStorage from "@react-native-community/async-storage";
import {User} from "@auth/types/classes";


export const login = async (
    email: string,
    password: string,
): Promise<Token> => {
    return Api.post('login', { email, password });
};

export const getRefreshToken = (
    refreshToken: string,
): Promise<{ access: string }> => {
    return Api.post('refresh-token', { refresh: refreshToken });
};

export const getTokens = async (): Promise<Token> => {
    return LocalStorageManager.getObjectPromise(TOKENS);
};

export const storeTokens = async (token: Token) => {
    await LocalStorageManager.storeObjectPromise(TOKENS, token);
    Api.setAuthorizationHeader(token.access, token.refresh);
};

export const getUser = (): Promise<User> => {
    return Api.get<User>('me');
};

export const logout = async () => {
    try {
        await AsyncStorage.removeItem(TOKENS);
        Api.deleteHeader();
        return true;
    } catch (exception) {
        return false;
    }
};

export const verifyAuth = async (): Promise<User> => {
    const tokens = await getTokens();
    if (!tokens) {
        throw Error('User not logged in.');
    }

    Api.setAuthorizationHeader(tokens.access, tokens.refresh);
    const user = await getUser();
    if (!user) {
        throw Error('User not found.');
    }
    return user;
};
