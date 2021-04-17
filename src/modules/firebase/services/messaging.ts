import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { isIphone } from '@src/transforms/utils';
const PushNotification = require('react-native-push-notification');

/**
 * In order to use this module import the class in the root container.
 * Invoke the setUp method with your credentials
 * Call the methods needed for your application. Good luck!
 */

export default class NotificationService {
  private static ANDROID_CHANNEL = 'channel-id-1';

  static async setUp() {
    await this.requestPermission();
  }

  private static async requestPermission(): Promise<boolean> {
    return messaging()
      .requestPermission()
      .then(() => true)
      .catch(() => false);
  }

  static onMessage(callback) {
    return messaging().onMessage(callback);
  }

  static onNotificationOpenedApp(callback) {
    return messaging().onNotificationOpenedApp(callback);
  }

  static getInitialNotification(): Promise<FirebaseMessagingTypes.RemoteMessage | null> {
    return messaging().getInitialNotification();
  }

  static async getInitialToken(): Promise<string> {
    if (!messaging().isDeviceRegisteredForRemoteMessages) {
      await messaging().registerDeviceForRemoteMessages();
    }
    return messaging().getToken();
  }

  static onRefresh(callback) {
    return messaging().onTokenRefresh(callback);
  }

  static clearBadge() {
    return PushNotification.setApplicationIconBadgeNumber(0);
  }

  static createChannel() {
    PushNotification.createChannel({
      channelId: NotificationService.ANDROID_CHANNEL, // (required)
      channelName: 'My channel', // (required)
      channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    });
  }

  static display(
    id: string,
    title: string,
    message: string,
    data?: { [key: string]: string },
  ) {
    if (!title && !message) {
      return;
    }

    if (isIphone) {
      return PushNotificationIOS.addNotificationRequest({
        id,
        title,
        body: message,
        userInfo: data || {},
      });
    }

    /***
     * The field repeatType is necessary as we cannot cancel local notifications if it isn't set
     */
    PushNotification.localNotification({
      channelId: NotificationService.ANDROID_CHANNEL,
      messageId: id,
      title,
      message,
      userInfo: data || {},
      visibility: 'public',
      importance: 'max',
      autoCancel: false,
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
      priority: 'max',
      repeatType: 'minute',
    });
  }
}
