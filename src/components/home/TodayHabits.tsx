
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Habit } from '../../storage/habits';

type Props = {
  habits: Habit[];
  onEdit: (habit: Habit) => void;
  onToggle: (id: string) => void;
  onDelete?: (habit: Habit) => void;
};

const BLUE = '#0047D5';
const GREEN = '#55F542';
const RED = '#D93025';

export default function TodayHabits({
  habits,
  onEdit,
  onToggle,
  onDelete,
}: Props) {
  return (
    <View style={styles.container}>
      {habits.map((habit) => (
        <LinearGradient
          key={habit.id}
          colors={['#8EAAEE', '#FFFFFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.habitCard}
        >
          <Pressable
            onPress={() => onToggle(habit.id)}
            style={styles.dotButton}
            accessibilityRole="button"
            accessibilityLabel={
              habit.completed
                ? `Marcar ${habit.title} como pendiente`
                : `Marcar ${habit.title} como cumplido`
            }
          >
            <View
              style={[
                styles.statusDot,
                {
                  backgroundColor: habit.completed ? GREEN : '#FFFFFF',
                },
                !habit.completed && styles.whiteDot,
              ]}
            />
          </Pressable>

          <View style={styles.info}>
            <Text style={styles.title}>{habit.title}</Text>
            <Text style={styles.subtitle}>{habit.subtitle}</Text>
          </View>

          <Pressable
            onPress={() => onEdit(habit)}
            style={styles.actionButton}
            hitSlop={8}
            accessibilityLabel={`Editar ${habit.title}`}
          >
            <Ionicons name="pencil-outline" size={17} color={BLUE} />
          </Pressable>

          <Pressable
            onPress={() => onDelete?.(habit)}
            style={styles.actionButton}
            hitSlop={8}
            accessibilityLabel={`Eliminar ${habit.title}`}
          >
            <Ionicons name="trash-outline" size={18} color={RED} />
          </Pressable>
        </LinearGradient>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginBottom: 20,
  },
  habitCard: {
    minHeight: 65,
    borderRadius: 16,
    paddingHorizontal: 17,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotButton: {
    width: 28,
    height: 32,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 5,
  },
  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  whiteDot: {
    borderWidth: 1,
    borderColor: '#D5DCE8',
  },
  info: {
    flex: 1,
  },
  title: {
    color: BLUE,
    fontSize: 14,
    fontWeight: '800',
  },
  subtitle: {
    color: BLUE,
    fontSize: 11,
    marginTop: 3,
  },
  actionButton: {
    padding: 5,
    marginLeft: 5,
  },
});
