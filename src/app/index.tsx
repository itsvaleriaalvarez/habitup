import { ScrollView, StyleSheet, View } from 'react-native';
import { GoalGrid } from '../components/GoalGrid';
import { HeartRateCard } from '../components/HeartRateCard';
import { MetricCards } from '../components/MetricCards';

export default function Index() {
  return (
    <View style={styles.mainWrapper}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <GoalGrid />
        <HeartRateCard />
        <MetricCards />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 16,
    paddingBottom: 100,
  },
});