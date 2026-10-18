
import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
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
          size={24}
          color={WHITE}
        />

        <Text style={[styles.label, active && styles.activeLabel]}>
          {item.label}
        </Text>

        {active && <View style={styles.activeIndicator} />}
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
    paddingTop: 12,
    paddingBottom: 10,
    paddingHorizontal: 6,
    shadowColor: '#16336B',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 8,
  },
  item: {
    flex: 1,
    minWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  label: {
    color: WHITE,
    fontSize: 11,
    fontWeight: '500',
  },
  activeLabel: {
    fontWeight: '800',
  },
  activeIndicator: {
    width: 16,
    height: 3,
    borderRadius: 2,
    backgroundColor: WHITE,
    marginTop: 1,
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
    borderColor: WHITE,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
  },
});
