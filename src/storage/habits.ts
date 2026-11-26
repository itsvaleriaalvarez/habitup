
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Habit = {
  id: string;
  title: string;
  subtitle: string;
  completed: boolean;
};

const STORAGE_KEY = '@habitup:habits';

export const defaultHabits: Habit[] = [
  {
    id: '1',
    title: 'Tomar agua',
    subtitle: '6 de 8 vasos',
    completed: true,
  },
  {
    id: '2',
    title: 'Entrenamiento',
    subtitle: '40 minutos',
    completed: true,
  },
  {
    id: '3',
    title: 'Sueño',
    subtitle: '8 horas',
    completed: false,
  },
  {
    id: '4',
    title: 'Dieta',
    subtitle: 'Saludable',
    completed: false,
  },
];

export async function loadHabits(): Promise<Habit[]> {
  try {
    const saved = await AsyncStorage.getItem(STORAGE_KEY);

    return saved !== null ? JSON.parse(saved) : defaultHabits;
  } catch (error) {
    console.error('Error al cargar los hábitos', error);
    return defaultHabits;
  }
}

export async function saveHabits(habits: Habit[]): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
  } catch (error) {
    console.error('Error al guardar los hábitos', error);
  }
}
