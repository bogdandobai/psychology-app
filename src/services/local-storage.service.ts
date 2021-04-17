import AsyncStorage from '@react-native-community/async-storage';

export default class LocalStorageManager {
    public static storeObject(
        key: string,
        object: any,
        successCallback?: any,
        errorCallback?: any,
    ) {
        AsyncStorage.setItem(key, JSON.stringify(object))
            .then((obj) => {
                successCallback(obj);
            })
            .catch((err) => {
                errorCallback(err);
            });
    }
    public static getObject(
        key: string,
        successCallback: any,
        errorCallback: any,
    ) {
        AsyncStorage.getItem(key)
            .then((obj: any) => {
                successCallback(JSON.parse(obj));
            })
            .catch((err) => {
                errorCallback(err);
            });
    }
    public static removeObject(
        key: string,
        successCallback: any,
        errorCallback: any,
    ) {
        AsyncStorage.removeItem(key)
            .then((obj) => {
                successCallback(obj);
            })
            .catch((err) => {
                errorCallback(err);
            });
    }
    public static getObjects(
        keysArray: string[],
        successCallback: any,
        errorCallback: any,
    ) {
        AsyncStorage.multiGet(keysArray)
            .then((obj) => {
                successCallback(obj);
            })
            .catch((err) => {
                errorCallback(err);
            });
    }
    public static storeObjectPromise(key: string, object: any) {
        return AsyncStorage.setItem(key, JSON.stringify(object));
    }
    public static getObjectPromise(key: string) {
        return AsyncStorage.getItem(key)
            .then((resultKey: any) => {
                return JSON.parse(resultKey);
            })
            .catch((error) => Promise.reject(error));
    }
    public static removeObjectPromise(key: string) {
        return AsyncStorage.removeItem(key);
    }
}
