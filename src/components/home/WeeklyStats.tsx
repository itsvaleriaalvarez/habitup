
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { weeklyStats } from '../../constants/homeData';

const BLUE = '#0047D5';

export default function WeeklyStats() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>Esta semana</Text>
        <Text style={styles.link}>Ver todo</Text>
      </View>

      <View style={styles.cards}>
        {weeklyStats.map((stat) => (
          <LinearGradient
            key={stat.label}
            colors={['#8EAAEE', '#FFFFFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.card}
          >
            <Ionicons name={stat.icon} size={23} color={BLUE} />
            <Text style={styles.number}>{stat.number}</Text>
            <Text style={styles.label}>{stat.label}</Text>
          </LinearGradient>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
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
  link: {
    color: BLUE,
    fontSize: 12,
    fontWeight: '700',
  },
  cards: {
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    flex: 1,
    minHeight: 112,
    borderRadius: 17,
    paddingVertical: 13,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: BLUE,
    fontSize: 25,
    fontWeight: '900',
    marginTop: 5,
  },
  label: {
    color: BLUE,
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 3,
  },
});
