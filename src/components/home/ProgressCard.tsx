
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const BLUE = '#0047D5';
const GREEN = '#55F542';
const WHITE = '#FFFFFF';

export default function ProgressCard() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#8EAAEE', '#0047D5']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.card}
    >
      <View style={styles.content}>
        <Text style={styles.label}>TU PROGRESO</Text>
        <Text style={styles.title}>¡Sigue así!</Text>

        <Text style={styles.description}>
          Ya completaste el 70% de tus objetivos esta semana
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push('/progress' as never)}
        >
          <Text style={styles.buttonText}>Ver progreso</Text>
          <Ionicons name="arrow-forward" size={15} color={WHITE} />
        </Pressable>
      </View>

      <View style={styles.progress}>
        <Svg width={100} height={100} viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="39"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="4"
            fill="none"
          />
          <Path
            d="M 50 11 A 39 39 0 1 1 12.9 62.1"
            stroke={GREEN}
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </Svg>

        <View style={styles.percentageContainer}>
          <Text style={styles.percentage}>70%</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 165,
    borderRadius: 22,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  content: {
    flex: 1,
    paddingRight: 5,
  },
  label: {
    color: WHITE,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  title: {
    color: WHITE,
    fontSize: 23,
    fontWeight: '900',
    marginTop: 5,
  },
  description: {
    color: WHITE,
    fontSize: 12,
    lineHeight: 16,
    marginTop: 5,
    maxWidth: 195,
  },
  button: {
    backgroundColor: '#F18701',
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 7,
    marginTop: 10,
  },
  buttonText: {
    color: WHITE,
    fontSize: 11,
    fontWeight: '700',
  },
  progress: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentage: {
    color: WHITE,
    fontSize: 23,
    fontWeight: '900',
  },
});
