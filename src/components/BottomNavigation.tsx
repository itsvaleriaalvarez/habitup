
import { usePathname, useRouter } from 'expo-router';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

const BLUE = '#0047D5';
const ORANGE = '#F18701';

export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (route: '/' | '/routines' | '/progress' | '/profile') => {
    router.push(route as never);
  };

  const items = [
    { label: 'Inicio', symbol: '⌂', route: '/' as const },
    { label: 'Rutinas', symbol: '▤', route: '/routines' as const },
    { label: 'Progreso', symbol: '▥', route: '/progress' as const },
    { label: 'Perfil', symbol: '♙', route: '/profile' as const },
  ];

  return (
    <View style={styles.container}>
      {items.slice(0, 2).map((item) => (
        <Pressable
          key={item.label}
          style={styles.item}
          onPress={() => navigate(item.route)}
        >
          <Text style={styles.symbol}>{item.symbol}</Text>
          <Text
            style={[
              styles.label,
              pathname === item.route && styles.activeLabel,
            ]}
          >
            {item.label}
          </Text>
        </Pressable>
      ))}

      <Pressable
        accessibilityLabel="Agregar"
        style={styles.addButton}
        onPress={() =>
          Alert.alert('Agregar', 'Aquí conectaremos la acción de agregar.')
        }
      >
        <Text style={styles.plus}>+</Text>
      </Pressable>

      {items.slice(2).map((item) => (
        <Pressable
          key={item.label}
          style={styles.item}
          onPress={() => navigate(item.route)}
        >
          <Text style={styles.symbol}>{item.symbol}</Text>
          <Text
            style={[
              styles.label,
              pathname === item.route && styles.activeLabel,
            ]}
          >
            {item.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: BLUE,
    paddingTop: 10,
    paddingBottom: 12,
    paddingHorizontal: 4,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  symbol: {
    color: '#FFFFFF',
    fontSize: 25,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 11,
  },
  activeLabel: {
    fontWeight: '800',
    textDecorationLine: 'underline',
  },
  addButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    marginTop: -28,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  plus: {
    color: '#FFFFFF',
    fontSize: 34,
    lineHeight: 38,
    fontWeight: '400',
  },
});
