
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from '../components/BottomNavigation';

const BLUE = '#0047D5';
const ORANGE = '#F18701';
const LIGHT_BLUE = '#8EAAEE';
const BACKGROUND = '#F8F9FA';
const WHITE = '#FFFFFF';
const DARK = '#202B3C';
const MUTED = '#7A8495';
const GREEN = '#A9B677';
const SOFT_BLUE = '#E8EEFC';
const SOFT_ORANGE = '#FFF0DA';

const habits = [
  { title: 'Tomar agua', icon: 'water-outline' as const, completed: true },
  { title: 'Entrenamiento', icon: 'barbell-outline' as const, completed: true },
  { title: 'Sueño', icon: 'moon-outline' as const, completed: false },
  { title: 'Dieta', icon: 'nutrition-outline' as const, completed: false },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Saludo y perfil */}
        <View style={styles.header}>
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>Buenos días,</Text>
            <Text style={styles.name}>¡Tu nombre!</Text>
          </View>

          <Pressable
            style={styles.avatar}
            onPress={() => router.push('/profile')}
            accessibilityRole="button"
            accessibilityLabel="Abrir perfil"
          >
            <Ionicons name="person" size={31} color={WHITE} />
          </Pressable>
        </View>

        {/* Progreso semanal */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeading}>
            <View>
              <Text style={styles.cardEyebrow}>TU PROGRESO</Text>
              <Text style={styles.progressTitle}>¡Sigue así!</Text>
            </View>

            <View style={styles.progressIcon}>
              <Ionicons name="trending-up" size={25} color={ORANGE} />
            </View>
          </View>

          <Text style={styles.progressDescription}>
            Ya completaste el 70% de tus objetivos esta semana.
          </Text>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>

          <Pressable
            style={styles.orangeButton}
            onPress={() => router.push('/ProgressScreen' as never)}
            accessibilityRole="button"
          >
            <Text style={styles.orangeButtonText}>Ver progreso</Text>
            <Ionicons name="arrow-forward" size={18} color={WHITE} />
          </Pressable>
        </View>

        {/* Estadísticas de la semana */}
        <Text style={styles.sectionTitle}>Esta semana</Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: SOFT_BLUE }]}>
              <Ionicons name="barbell-outline" size={20} color={BLUE} />
            </View>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Entrenamientos</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: SOFT_ORANGE }]}>
              <Ionicons name="time-outline" size={20} color={ORANGE} />
            </View>
            <Text style={styles.statNumber}>185</Text>
            <Text style={styles.statLabel}>Minutos</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: '#EAF0DE' }]}>
              <Ionicons name="calendar-outline" size={20} color="#748C43" />
            </View>
            <Text style={styles.statNumber}>6</Text>
            <Text style={styles.statLabel}>Días activos</Text>
          </View>
        </View>

        {/* Rutina de hoy */}
        <Text style={styles.sectionTitle}>Tu rutina de hoy</Text>

        <View style={styles.routineCard}>
          <View style={styles.routineIcon}>
            <Ionicons name="barbell" size={28} color={BLUE} />
          </View>

          <View style={styles.routineInfo}>
            <Text style={styles.routineCategory}>FUERZA</Text>
            <Text style={styles.routineTitle}>Full Body</Text>
            <Text style={styles.routineDetails}>
              35 min · 6 ejercicios
            </Text>
          </View>
        </View>

        <Pressable
          style={styles.orangeButton}
          onPress={() =>
            router.push('/routines' as never)
          }
          accessibilityRole="button"
        >
          <Text style={styles.orangeButtonText}>Comenzar</Text>
          <Ionicons name="arrow-forward" size={18} color={WHITE} />
        </Pressable>

        {/* Hábitos de hoy */}
        <View style={styles.habitsHeading}>
          <Text style={styles.sectionTitle}>Hábitos de hoy</Text>
          <Text style={styles.habitsCounter}>2 de 4</Text>
        </View>

        <View style={styles.habitsCard}>
          {habits.map((habit, index) => (
            <View
              key={habit.title}
              style={[
                styles.habitRow,
                index !== habits.length - 1 && styles.habitDivider,
              ]}
            >
              <View
                style={[
                  styles.habitIcon,
                  {
                    backgroundColor: habit.completed
                      ? '#EAF0DE'
                      : SOFT_BLUE,
                  },
                ]}
              >
                <Ionicons
                  name={habit.icon}
                  size={21}
                  color={habit.completed ? '#748C43' : BLUE}
                />
              </View>

              <Text style={styles.habitName}>{habit.title}</Text>

              <View
                style={[
                  styles.habitStatus,
                  {
                    backgroundColor: habit.completed
                      ? GREEN
                      : '#E2E5EA',
                  },
                ]}
              >
                {habit.completed && (
                  <Ionicons name="checkmark" size={16} color={WHITE} />
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    flex: 1,
  },
  greetingText: {
    fontSize: 16,
    color: MUTED,
    marginBottom: 4,
  },
  name: {
    fontSize: 27,
    fontWeight: '800',
    color: BLUE,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  progressCard: {
    backgroundColor: WHITE,
    borderRadius: 22,
    padding: 18,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E9ECF2',
  },
  progressHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  cardEyebrow: {
    color: MUTED,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 5,
  },
  progressTitle: {
    color: BLUE,
    fontSize: 23,
    fontWeight: '800',
  },
  progressIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: SOFT_ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressDescription: {
    color: DARK,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 16,
  },
  progressTrack: {
    height: 8,
    borderRadius: 8,
    backgroundColor: '#E8ECF4',
    overflow: 'hidden',
    marginBottom: 17,
  },
  progressFill: {
    width: '70%',
    height: '100%',
    backgroundColor: ORANGE,
    borderRadius: 8,
  },
  orangeButton: {
    minHeight: 46,
    borderRadius: 16,
    backgroundColor: ORANGE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    paddingHorizontal: 18,
    marginBottom: 24,
  },
  orangeButtonText: {
    color: WHITE,
    fontSize: 14,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: DARK,
    marginBottom: 13,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 9,
    marginBottom: 25,
  },
  statCard: {
    flex: 1,
    minWidth: 0,
    backgroundColor: WHITE,
    borderRadius: 17,
    paddingVertical: 13,
    paddingHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9ECF2',
  },
  statIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 9,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: BLUE,
    marginBottom: 3,
  },
  statLabel: {
    fontSize: 10,
    color: MUTED,
    textAlign: 'center',
  },
  routineCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E9ECF2',
    marginBottom: 12,
  },
  routineIcon: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: SOFT_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  routineInfo: {
    flex: 1,
  },
  routineCategory: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    color: ORANGE,
    marginBottom: 4,
  },
  routineTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: DARK,
    marginBottom: 5,
  },
  routineDetails: {
    fontSize: 12,
    color: MUTED,
  },
  habitsHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7,
  },
  habitsCounter: {
    fontSize: 13,
    color: BLUE,
    fontWeight: '700',
    marginBottom: 13,
  },
  habitsCard: {
    backgroundColor: WHITE,
    borderRadius: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E9ECF2',
    marginBottom: 15,
  },
  habitRow: {
    minHeight: 61,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  habitDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEF0F5',
  },
  habitIcon: {
    width: 38,
    height: 38,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  habitName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: DARK,
  },
  habitStatus: {
    width: 25,
    height: 25,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
