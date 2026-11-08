
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNavigation from '../components/BottomNavigation';
import HomeHeader from '../components/home/HomeHeader';
import ProgressCard from '../components/home/ProgressCard';
import TodayHabits from '../components/home/TodayHabits';
import TodayRoutine from '../components/home/TodayRoutine';
import WeeklyStats from '../components/home/WeeklyStats';

const BLUE = '#0047D5';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <HomeHeader />

        <ProgressCard />

        <WeeklyStats />

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Tu Rutina de Hoy</Text>
          <Text style={styles.sectionLink}>Ver rutina</Text>
        </View>

        <TodayRoutine />

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Hábitos de hoy</Text>
          <Text style={styles.sectionLink}>Editar</Text>
        </View>

        <TodayHabits />
      </ScrollView>

      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 25,
  },
  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
  },
  sectionTitle: { color: BLUE, fontSize: 19, fontWeight: '900' },
  sectionLink: {
    color: BLUE,
    fontSize: 12,
    fontWeight: '700',
  },
});
