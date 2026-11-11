import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { habits } from '../../constants/homeData';

const BLUE = '#0047D5';

export default function TodayHabits() {
  return (
    <View style={styles.container}>
      {habits.map((habit) => (
        <LinearGradient
          key={habit.title}
          colors={['#8EAAEE', '#FFFFFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.habitCard}
        >
          <View
            style={[
              styles.statusDot,
              { backgroundColor: habit.color },
              habit.color === '#FFFFFF' && styles.whiteDot,
            ]}
          />

          <View style={styles.info}>
            <Text style={styles.title}>{habit.title}</Text>
            <Text style={styles.subtitle}>{habit.subtitle}</Text>
          </View>
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
  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 14,
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
});