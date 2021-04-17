import {User} from "@auth/types/classes";

export enum AppRoutes {
    LOADING = 'Loading',
    AUTH = 'Auth',
    HOME = 'Home',
}

export type AppRoutesProps = {
    [AppRoutes.LOADING]: undefined;
    [AppRoutes.AUTH]: undefined;
    [AppRoutes.HOME]: {user: User};
};
