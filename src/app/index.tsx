
import { useRouter } from 'expo-router';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from '../components/BottomNavigation';
import HomeHeader from '../components/home/HomeHeader';
import ProgressCard from '../components/home/ProgressCard';
import TodayHabits from '../components/home/TodayHabits';
import TodayRoutine from '../components/home/TodayRoutine';
import WeeklyStats from '../components/home/WeeklyStats';

const BLUE = '#0047D5';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <ProgressCard />
        <WeeklyStats />

        <View style={styles.section}>
          <View style={styles.heading}>
            <Text style={styles.title}>Tu Rutina de Hoy</Text>
            <Pressable onPress={() => router.push('/routines' as never)}>
              <Text style={styles.action}>Ver rutina</Text>
            </Pressable>
          </View>
          <TodayRoutine />
        </View>

        <View style={styles.section}>
          <View style={styles.heading}>
            <Text style={styles.title}>Hábitos de hoy</Text>
            <Pressable
              onPress={() =>
                Alert.alert('Editar hábitos', 'Aquí podrás editar tus hábitos.')
              }
            >
              <Text style={styles.action}>Editar</Text>
            </Pressable>
          </View>
          <TodayHabits />
        </View>
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
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 8,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
  },
  title: {
    fontSize: 19,
    fontWeight: '900',
    color: BLUE,
  },
  action: {
    color: BLUE,
    fontSize: 12,
    fontWeight: '700',
  },
});
