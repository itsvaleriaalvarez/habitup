
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export type Reminder = {
  id: string;
  hour: number;
  minute: number;
};

const REMINDER_KEY = 'reminder';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function askNotificationPermission(): Promise<boolean> {
  if (Platform.OS === 'web') {
    return false;
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Recordatorios',
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  const current = await Notifications.getPermissionsAsync();

  if (current.granted) {
    return true;
  }

  const answer = await Notifications.requestPermissionsAsync();
  return answer.granted;
}

export async function getReminder(): Promise<Reminder | null> {
  const stored = await AsyncStorage.getItem(REMINDER_KEY);

  if (!stored) {
    return null;
  }

  return JSON.parse(stored) as Reminder;
}

export async function scheduleDailyReminder(
  hour: number,
  minute: number
): Promise<Reminder> {
  if (Platform.OS === 'web') {
    throw new Error('Las notificaciones no están disponibles en web.');
  }

  const id = await Notifications.scheduleNotificationAsync({
    content: {
      title: '¡Es hora de moverte!',
      body: 'Tu rutina de hoy te está esperando. 💪',
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.CALENDAR,
      hour,
      minute,
      repeats: true,
    },
  });

  const reminder: Reminder = { id, hour, minute };

  await AsyncStorage.setItem(REMINDER_KEY, JSON.stringify(reminder));

  return reminder;
}

export async function cancelReminder(): Promise<void> {
  const reminder = await getReminder();

  if (reminder) {
    await Notifications.cancelScheduledNotificationAsync(reminder.id);
  }

  await AsyncStorage.removeItem(REMINDER_KEY);
}
