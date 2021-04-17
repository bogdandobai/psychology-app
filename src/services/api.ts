import { ApisauceInstance, create } from 'apisauce';
import jwtDecode from 'jwt-decode';
import * as authService from '@auth/services/auth.service';

class Api {
    private static api: ApisauceInstance;
    protected static accessToken: string;
    protected static refreshToken: string;
    protected static unauthorizedRoutes = [
        'login',
        'signup',
        'reset-password',
        'refresh-token',
    ];

    public static getInstance() {
        if (!Api.api) {
            const url = 'http://localhost:8000';
            Api.initializeWithUrl(url);
        }
    }
    private static initializeWithUrl(url: string) {
        Api.api = create({
            baseURL: url,
            headers: {
                Accept: 'application/json',
            },
        });
    }

    public static setAuthorizationHeader(
        accessToken: string,
        refreshToken: string,
    ) {
        Api.accessToken = accessToken;
        Api.refreshToken = refreshToken;
        Api.api.setHeader('Authorization', `Bearer ${accessToken}`);
    }

    static getToken = () => {
        return Api.accessToken;
    };

    static get = async <T>(url: string, params?: {}): Promise<T> => {
        await Api.checkAccessTokenExpiration(url);
        const response = await Api.api.get<T>(url, params);
        return Api.getResponse(response);
    };

    static post = async <T>(
        url: string,
        data?: {},
        headers: { [key: string]: string } = {},
    ): Promise<T> => {
        await Api.checkAccessTokenExpiration(url);
        const response = await Api.api.post<T>(url, data, { headers });
        return Api.getResponse(response);
    };

    static patch = async <T>(
        url: string,
        data?: {},
        headers: { [key: string]: string } = {},
    ): Promise<T> => {
        await Api.checkAccessTokenExpiration(url);
        const response = await Api.api.patch<T>(url, data);
        return Api.getResponse(response);
    };

    static put = async <T>(url: string, data?: {}): Promise<T> => {
        await Api.checkAccessTokenExpiration(url);
        const response = await Api.api.put<T>(url, data);
        return Api.getResponse(response);
    };

    static delete = async <T>(url: string, params?: {}): Promise<T> => {
        await Api.checkAccessTokenExpiration(url);
        const response = await Api.api.delete<T>(url, params);
        return Api.getResponse(response);
    };

    private static getResponse = (response: any): Promise<any> => {
        return !response.ok
            ? Promise.reject(response.data)
            : Promise.resolve(response.data);
    };
    private static checkUrlHasAccessToken = (url: string) => {
        if (Api.unauthorizedRoutes.find((value) => url.indexOf(value) >= 0)) {
            Api.getInstance();
            return false;
        }
        return true;
    };

    private static checkAccessTokenExpiration = async (url: string) => {
        if (Api.checkUrlHasAccessToken(url)) {
            const currentTime = Date.now() / 1000;
            const decodedAccessToken = jwtDecode(Api.accessToken);
            if (decodedAccessToken.exp < currentTime) {
                const token = await authService.getRefreshToken(Api.refreshToken);
                Api.setAuthorizationHeader(token.access, Api.refreshToken);
            }
        }
    };

    public static deleteHeader = () => {
        Api.api.deleteHeader('Authorization');
    };
}

export default Api;
