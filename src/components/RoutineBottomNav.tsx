import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { theme } from './routineTheme';

type IconName = 'home-outline' | 'body-outline' | 'stats-chart-outline' | 'person-outline';
type Props = { onCreate: () => void; onNavigate: (screen: string) => void };

const tabs: { id: string; icon: IconName; label: string }[] = [
  { id: 'home', icon: 'home-outline', label: 'Inicio' },
  { id: 'activity', icon: 'body-outline', label: 'Actividad' },
  { id: 'progress', icon: 'stats-chart-outline', label: 'Progreso' },
  { id: 'profile', icon: 'person-outline', label: 'Perfil' },
];

export default function RoutineBottomNav({ onCreate, onNavigate }: Props) {
  const renderTab = (tab: (typeof tabs)[number]) => (
    <Pressable
      key={tab.id}
      onPress={() => onNavigate(tab.id)}
      accessibilityRole="button"
      accessibilityLabel={tab.label}
      style={({ pressed }) => [styles.tab, pressed && styles.pressed]}
    >
      <Ionicons name={tab.icon} size={theme.text.title} color="#FFFFFF" />
    </Pressable>
  );

  return (
    <View style={styles.navContainer}>
      <View style={styles.bar}>
        {renderTab(tabs[0])}
        {renderTab(tabs[1])}
        <Pressable onPress={onCreate} accessibilityRole="button" accessibilityLabel="Crear rutina" style={styles.tab}>
          <Image source={require('../../assets/images/routines/add-routine.png')} style={styles.plus} />
        </Pressable>
        {renderTab(tabs[2])}
        {renderTab(tabs[3])}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: { paddingBottom: theme.layout.navigationBottomGap, backgroundColor: theme.colors.background },
  bar: {
    flexDirection: 'row',
    backgroundColor: theme.colors.navigation,
    borderRadius: theme.radius.full,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: theme.layout.navigationHeight,
    overflow: 'visible',
  },
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%' },
  plus: { width: theme.layout.plusSize, height: theme.layout.plusSize, marginTop: -theme.spacing.md },
  pressed: { opacity: 0.6 },
});
