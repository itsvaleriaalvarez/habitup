
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const BLUE = '#0047D5';
const WHITE = '#FFFFFF';

export default function TodayRoutine() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#8EAAEE', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.card}
    >
      <View style={styles.imagePlaceholder}>
        <Ionicons name="barbell" size={42} color={BLUE} />
      </View>

      <View style={styles.info}>
        <Text style={styles.category}>FUERZA</Text>
        <Text style={styles.title}>Full Body</Text>

        <View style={styles.details}>
          <Ionicons name="time-outline" size={14} color={BLUE} />
          <Text style={styles.detailText}>35 min</Text>
          <Text style={styles.separator}>·</Text>
          <Ionicons name="fitness-outline" size={14} color={BLUE} />
          <Text style={styles.detailText}>6 ejercicios</Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => router.push('/routines' as never)}
        >
          <Text style={styles.buttonText}>Comenzar</Text>
          <Ionicons name="arrow-forward" size={15} color={WHITE} />
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 155,
    borderRadius: 20,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  imagePlaceholder: {
    width: 112,
    height: 125,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    paddingLeft: 15,
  },
  category: {
    color: BLUE,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  title: {
    color: WHITE,
    fontSize: 21,
    fontWeight: '900',
    marginTop: 4,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 8,
  },
  detailText: {
    color: BLUE,
    fontSize: 10,
  },
  separator: {
    color: BLUE,
    marginHorizontal: 2,
  },
  button: {
    backgroundColor: '#F18701',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 7,
    marginTop: 12,
  },
  buttonText: {
    color: WHITE,
    fontSize: 11,
    fontWeight: '800',
  },
});
