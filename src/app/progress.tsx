
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import { GoalGrid } from '../components/GoalGrid';
import { HeartRateCard } from '../components/HeartRateCard';
import { MetricCards } from '../components/MetricCards';

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageTitle}>Progreso</Text>
        <GoalGrid />
        <HeartRateCard />
        <MetricCards />
      </ScrollView>

      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 24,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2C49CA',
    marginBottom: 20,
  },
});
