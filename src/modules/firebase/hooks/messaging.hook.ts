import { useEffect, useRef } from 'react';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification, {
  PushNotification as Notification,
} from 'react-native-push-notification';
import { isIphone } from '@src/transforms/utils';
import NotificationService from "@src/modules/firebase/services/messaging";

/**
 * Use Notifications hook is used for handling the notification API
 * It's using the Notification.service to open and handle the new messages.
 *
 * Also updates the FCM Token
 * @param getFCMToken -> Function to retrieve the current FCM Token. Usually this is an API Call
 * @param updateFCMToken -> Function to update the user FCM Token. Usually this is an API call
 * @param selectUserToken -> Selector for getting the User FCM Token
 * @param onReceived => Function that is called when the app received a new message.
 * @param onOpen
 */
export const useNotifications = (
  getFCMToken: () => Promise<string>,
  updateFCMToken: (token: string) => Promise<void>,
  selectUserToken: (state: any) => string,
  onReceived: (data: any) => void = (data: any) => {},
  onOpen: (data: any, active: boolean) => void = (data: any) => {},
) => {
  const userFcmToken = useRef<string>();

  /**
   * Get the FCM Token for the current user and start listening for token updates
   */
  useEffect(() => {
    // getFCMToken().then((token) => {
    //   NotificationService.setUp().then(async (value) => {
        // TODO Handle the case when user rejects the notifications

        // Initialize FCM Token

        // await initializeFCMToken(token);
      // });
    // });
  }, []);

  /**
   * Listen for FCM Token changes
   */
  useEffect(() => listenFcmToken(), []);

  /**
   * Listen to message received
   */
  useEffect(() => listenNotifications(), []);

  /**
   * Create an Android Channel
   */
  useEffect(() => {
    NotificationService.createChannel();
  }, []);

  /**
   * Configure Push Notification to be triggered each time a user opens
   * a notification
   */
  useEffect(() => {
    PushNotification.configure({
      onNotification: (notification: Notification) => {
        if (notification.data) {
          onOpen(notification.data, notification.foreground);
        }
        const clicked = notification.userInteraction;

        if (clicked) {
          if (isIphone) {
            PushNotification.cancelLocalNotifications({
              id: notification.data.id,
            });
          } else {
            PushNotification.cancelLocalNotifications({ id: notification.id });
          }
        }

        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    });
  }, []);

  /**
   * Listen if the app was open from a notification
   */
  useEffect(() => {
    NotificationService.getInitialNotification().then((message) => {
      if (message && message.data) {
        // Set the app as active because we already loaded the data
        // when the app starts
        onOpen(message.data, true);
      }
    });
  }, []);

  /**
   * Initialize user token if it's different from FCM Token
   * @param initializeToken: user token from API
   */
  const initializeFCMToken = async (initializeToken: string) => {
    const fcmToken = await NotificationService.getInitialToken();
    if (fcmToken !== initializeToken) {
      await updateFCMToken(fcmToken);
      userFcmToken.current = fcmToken;
    }
  };

  const listenFcmToken = () => {
    return NotificationService.onRefresh(async (token) => {
      if (token !== userFcmToken.current) {
        await updateFCMToken(token);
        userFcmToken.current = token;
      }
    });
  };

  /**
   * Clear badge when the app starts
   */
  useEffect(() => {
    NotificationService.clearBadge();
  }, []);

  const listenNotifications = () => {
    return NotificationService.onMessage(
      (message: FirebaseMessagingTypes.RemoteMessage) => {
        NotificationService.clearBadge();
        NotificationService.display(
          message.messageId,
          message.notification?.title,
          message.notification?.body,
          message.data,
        );

        if (message.data) {
          onReceived(message.data);
        }
      },
    );
  };
};
