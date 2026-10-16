import { ScrollView, StyleSheet, Text } from 'react-native';
import { GoalGrid } from '../components/GoalGrid';
import { HeartRateCard } from '../components/HeartRateCard';
import { MetricCards } from '../components/MetricCards';

export default function ProgressScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Progreso</Text>
      <GoalGrid />
      <HeartRateCard />
      <MetricCards />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 24,
    paddingTop: 60,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2C49CA',
    marginBottom: 20,
  },
});