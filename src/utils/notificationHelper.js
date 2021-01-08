import AsyncStorage from "@react-native-community/async-storage";
import { Notifications, Permission } from "expo";

const NOTIFICATION_KEY = "MobileFlashCards:notifications";

export function createNotification() {
  return {
    title: "Time to study",
    body: "Don't forget to study today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  console.log("setLocalNotification");
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        console.log("no data time to set notification");
        Permissions.askAsync(Permissions.NOTIFICATIONS).then((pStatus) => {
          if (pStatus.status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);
            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day",
            });
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true)).then(
              () => {
                console.log(
                  "finished setLocalNotification  for " +
                    JSON.stringify(tomorrow)
                );
              }
            );
          } else {
            console.log(
              "nothing to do User decided for no notifications" +
                JSON.stringify(pStatus)
            );
          }
        });
      }
    });
}

export function clearLocalNotification() {
  console.log("cleared previous notification");
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
}
