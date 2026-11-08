
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const BLUE = '#0047D5';

export default function HomeHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>BUENOS DÍAS</Text>
        <Text style={styles.name}>GENE!</Text>
      </View>

      <Pressable
        style={styles.avatar}
        onPress={() => router.push('/profile')}
        accessibilityRole="button"
        accessibilityLabel="Abrir perfil"
      >
        <Ionicons name="person" size={27} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: BLUE,
  },
  name: {
    fontSize: 29,
    fontWeight: '900',
    color: BLUE,
    marginTop: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
