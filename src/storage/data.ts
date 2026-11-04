import AsyncStorage from '@react-native-async-storage/async-storage';

export type Routine = {
  id: string;
  name: string;
  description?: string;
  completedDays?: number;
  icon?: string;
};

const STORAGE_KEY = '@habitup:routines';

// Cargar todas las rutinas guardadas
export async function loadRoutines(): Promise<Routine[]> {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error al cargar las rutinas', e);
    return [];
  }
}

// Guardar una nueva rutina
export async function saveRoutine(routine: Omit<Routine, 'id'>): Promise<void> {
  try {
    const currentRoutines = await loadRoutines();
    const newRoutine: Routine = {
      ...routine,
      id: Date.now().toString(),
    };
    const updated = [newRoutine, ...currentRoutines];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error al guardar la rutina', e);
  }
}

// Eliminar una rutina por ID
export async function deleteRoutine(id: string): Promise<void> {
  try {
    const currentRoutines = await loadRoutines();
    const updated = currentRoutines.filter((r) => r.id !== id);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error al eliminar la rutina', e);
  }
}