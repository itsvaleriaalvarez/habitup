
import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import {
  Alert,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

const BLUE = '#0047D5';
const ORANGE = '#F18701';
const WHITE = '#FFFFFF';

const items = [
  {
    label: 'Inicio',
    icon: 'home-outline' as const,
    activeIcon: 'home' as const,
    route: '/' as const,
  },
  {
    label: 'Rutinas',
    icon: 'calendar-outline' as const,
    activeIcon: 'calendar' as const,
    route: '/routines' as const,
  },
  {
    label: 'Progreso',
    icon: 'bar-chart-outline' as const,
    activeIcon: 'bar-chart' as const,
    route: '/progress' as const,
  },
  {
    label: 'Perfil',
    icon: 'person-outline' as const,
    activeIcon: 'person' as const,
    route: '/profile' as const,
  },
];

export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (route: '/' | '/routines' | '/progress' | '/profile') => {
    if (pathname !== route) {
      router.push(route as never);
    }
  };

  const renderItem = (item: (typeof items)[number]) => {
    const active = pathname === item.route;

    return (
      <Pressable
        key={item.label}
        style={styles.item}
        onPress={() => navigate(item.route)}
        accessibilityRole="button"
        accessibilityLabel={item.label}
        accessibilityState={{ selected: active }}
      >
        <Ionicons
          name={active ? item.activeIcon : item.icon}
          size={25}
          color={WHITE}
        />
      </Pressable>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {items.slice(0, 2).map(renderItem)}

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Agregar"
          style={styles.addButton}
          onPress={() =>
            Alert.alert(
              'Agregar',
              'Aquí conectaremos la acción de agregar.'
            )
          }
        >
          <Ionicons name="add" size={34} color={WHITE} />
        </Pressable>

        {items.slice(2).map(renderItem)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 12,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: BLUE,
    borderRadius: 28,
    minHeight: 52,
    paddingHorizontal: 10,
  },
  item: {
    flex: 1,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    marginTop: -24,
    borderWidth: 4,
    borderColor: WHITE,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
  },
});
