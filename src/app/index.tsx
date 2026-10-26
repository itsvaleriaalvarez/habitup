import { ScrollView, StyleSheet, View } from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import { GoalGrid } from '../components/GoalGrid';
import { HeartRateCard } from '../components/HeartRateCard';
import { MetricCards } from '../components/MetricCards';
import { Theme } from '../constants/theme';

export default function Index() {
  return (
    <View style={styles.mainWrapper}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <GoalGrid />
        <HeartRateCard />
        <MetricCards />
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: Theme.spacing.md,
    gap: Theme.spacing.md,
    paddingBottom: 100, // Espacio para que la barra inferior no tape el contenido
  },
});