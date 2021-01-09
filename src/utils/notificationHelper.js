import AsyncStorage from "@react-native-community/async-storage";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

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


function startsTomorowButNotAbleToRepeateEvryDay() {
  let tomorrow = new Date();
  //tomorrow.setDate(tomorrow.getDate() + 1);
  //tomorrow.setHours(20);
  tomorrow.setMinutes(2);

  return {
    content: {
      title: "Time to study",
      body: "Don't forget to study today!",
    },
    trigger: tomorrow,
  };
}

function repeatsEvryDayButNotPossibleToSetTime() {
  const seccondsInADay = 24 * 60 * 60;

  return {
    content: {
      title: "Time to study",
      body: "Don't forget to study today!",
    },
    trigger: {
      seconds: seccondsInADay,
      repeats: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then((pStatus) => {
          if (pStatus.status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            let next5Secconds = new Date();
            next5Secconds.setSeconds(next5Secconds.getSeconds + 5);

            Notifications.scheduleNotificationAsync(repeatsEvryDayButNotPossibleToSetTime());

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
