
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNavigation from '../components/BottomNavigation';
import HabitModal from '../components/home/HabitModal';
import HomeHeader from '../components/home/HomeHeader';
import ProgressCard from '../components/home/ProgressCard';
import TodayHabits from '../components/home/TodayHabits';
import TodayRoutine from '../components/home/TodayRoutine';
import WeeklyStats from '../components/home/WeeklyStats';

import {
  Habit,
  defaultHabits,
  loadHabits,
  saveHabits,
} from '../storage/habits';

const BLUE = '#0047D5';
const ORANGE = '#F18701';
const RED = '#D93025';

export default function HomeScreen() {
  const router = useRouter();

  const [habits, setHabits] = useState<Habit[]>(defaultHabits);
  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);
  const [habitToDelete, setHabitToDelete] = useState<Habit | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [storageLoaded, setStorageLoaded] = useState(false);

  useEffect(() => {
    let active = true;

    loadHabits().then((savedHabits) => {
      if (active) {
        setHabits(savedHabits);
        setStorageLoaded(true);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (storageLoaded) {
      saveHabits(habits);
    }
  }, [habits, storageLoaded]);

  const openAddModal = () => {
    setSelectedHabit(null);
    setModalVisible(true);
  };

  const openEditModal = (habit: Habit) => {
    setSelectedHabit(habit);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedHabit(null);
  };

  const handleSaveHabit = (title: string, subtitle: string) => {
    if (selectedHabit) {
      setHabits((current) =>
        current.map((habit) =>
          habit.id === selectedHabit.id
            ? { ...habit, title, subtitle }
            : habit
        )
      );
    } else {
      const newHabit: Habit = {
        id: Date.now().toString(),
        title,
        subtitle,
        completed: false,
      };

      setHabits((current) => [newHabit, ...current]);
    }

    closeModal();
  };

  const handleToggleHabit = (id: string) => {
    setHabits((current) =>
      current.map((habit) =>
        habit.id === id
          ? { ...habit, completed: !habit.completed }
          : habit
      )
    );
  };

  const handleDeleteHabit = (habit: Habit) => {
    setHabitToDelete(habit);
  };

  const confirmDeleteHabit = () => {
    if (!habitToDelete) return;

    const habitId = habitToDelete.id;

    setHabits((current) =>
      current.filter((habit) => habit.id !== habitId)
    );

    setHabitToDelete(null);
  };

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <ProgressCard />
        <WeeklyStats />

        <View style={styles.section}>
          <View style={styles.heading}>
            <Text style={styles.title}>Tu Rutina de Hoy</Text>

            <Pressable onPress={() => router.push('/routines' as never)}>
              <Text style={styles.action}>Ver rutina</Text>
            </Pressable>
          </View>

          <TodayRoutine />
        </View>

        <View style={styles.section}>
          <View style={styles.heading}>
            <Text style={styles.title}>Hábitos de hoy</Text>
          </View>

          <TodayHabits
            habits={habits}
            onEdit={openEditModal}
            onToggle={handleToggleHabit}
            onDelete={handleDeleteHabit}
          />
        </View>
      </ScrollView>

      <BottomNavigation onAdd={openAddModal} />

      <HabitModal
        visible={modalVisible}
        habit={selectedHabit}
        onClose={closeModal}
        onSave={handleSaveHabit}
      />

      <Modal
        visible={habitToDelete !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setHabitToDelete(null)}
      >
        <View style={styles.overlay}>
          <View style={styles.confirmModal}>
            <Text style={styles.confirmTitle}>
              ¿Deseas eliminar este hábito?
            </Text>

            <Text style={styles.confirmDescription}>
              ¿Estás segura de que quieres eliminar
              {' '}"{habitToDelete?.title}"?
            </Text>

            <View style={styles.confirmActions}>
              <Pressable
                style={styles.cancelButton}
                onPress={() => setHabitToDelete(null)}
              >
                <Text style={styles.cancelText}>No</Text>
              </Pressable>

              <Pressable
                style={styles.deleteButton}
                onPress={confirmDeleteHabit}
              >
                <Text style={styles.deleteText}>Sí, eliminar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 8,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
  },
  title: {
    fontSize: 19,
    fontWeight: '900',
    color: BLUE,
  },
  action: {
    color: BLUE,
    fontSize: 12,
    fontWeight: '700',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  confirmModal: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
  },
  confirmTitle: {
    color: BLUE,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
  confirmDescription: {
    color: '#667085',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 22,
  },
  confirmActions: {
    flexDirection: 'row',
    gap: 10,
  },
  cancelButton: {
    flex: 1,
    padding: 13,
    borderRadius: 12,
    backgroundColor: '#EEF2FA',
    alignItems: 'center',
  },
  cancelText: {
    color: BLUE,
    fontWeight: '800',
  },
  deleteButton: {
    flex: 1,
    padding: 13,
    borderRadius: 12,
    backgroundColor: RED,
    alignItems: 'center',
  },
  deleteText: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
});
